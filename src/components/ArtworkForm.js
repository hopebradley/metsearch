import React, { useState } from 'react';

const ArtworkForm = ({getArtwork, setMessage, message}) => {

    const [ selectedDepartmentID, setSelectedDepartmentID ] = useState("");
    const [ selectedDepartment, setSelectedDepartment ] = useState("Select one...");
    const [ keyword, setKeyword ] = useState("");

    function handleKeywordSubmit(e) {
        e.preventDefault();
        const userInput = e.target.children[0];
        const keyword = userInput.value;
        console.log(keyword)
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${keyword}`)
        .then(resp => resp.json())
        .then(data => {
            const objectArray = data.objectIDs;
            const randomID = Math.floor(Math.random() * objectArray.length);
            setMessage(`Current keyword: ${keyword.toUpperCase()}!`);
            getArtwork(objectArray[randomID]);
        });
    }

    function handleDepartmentSubmit(e) {
        e.preventDefault();
        console.log(selectedDepartmentID);
        console.log(selectedDepartment);
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&departmentId=${selectedDepartmentID}&q=e`)
        .then(resp => resp.json())
        .then(data => {
            const objectArray = data.objectIDs;
            const randomID = Math.floor(Math.random() * objectArray.length);
            getArtwork(objectArray[randomID])
            setMessage(`Current Department: ${selectedDepartment}`)
        });
    }

    function handleDepartmentChange(e) {
        setSelectedDepartmentID(e.target[e.target.selectedIndex].id);
        setSelectedDepartment(e.target.value);
        setKeyword("");
    }
    function handleKeywordChange(e) {
        setKeyword(e.target.value);
        setSelectedDepartment("Select one...")
    }

    return (
        <div>
            <div className="artwork-form columns">
                <div className="form-option box column">
                    <h3>SEARCH BY KEYWORD</h3>
                    <form onSubmit={handleKeywordSubmit}>
                        <input 
                            type="text" 
                            placeholder="type a keyword..."
                            value={keyword}
                            onChange={handleKeywordChange}>
                            </input>
                        <input type="submit"></input>
                    </form> 
                </div>
                <div className="middle-word">
                    <h4>OR</h4>
                </div>
                <div className="form-option box column">
                    <h3>CHOOSE DEPARTMENT</h3>
                    <form onSubmit={handleDepartmentSubmit}>
                        <select id={selectedDepartmentID} value={selectedDepartment} onChange={handleDepartmentChange}>
                            <option id="" disabled default>Select one...</option>
                            <option id="1">American Art</option>
                            <option id="6">Asian Art</option>
                            <option id="5">African and South American Art</option>
                            <option id="10">Egyptian Art</option>
                            <option id="11">European Art</option>
                            <option id="13">Greek and Roman Art</option>
                            <option id="14">Islamic Art</option>
                            <option id="17">Medieval Art</option>
                            <option id="21">Modern Art</option>
                            <option id="19">Photographs</option>
                        </select>
                        <input type="submit" value="Search"></input>
                    </form>
                    
                </div>
            </div>
            <h3 className="message">{message}</h3>
        </div>
        
    );

}

export default ArtworkForm;