import './App.css';
import React, { useState, useEffect } from 'react';
import Artwork from './components/Artwork';
import ArtworkForm from './components/ArtworkForm';
import Title from './components/Title';
import Footer from './components/Footer';

function App() {

  const [ currentArtwork, setCurrentArtwork ] = useState({});
  const [ message, setMessage ] = useState("");

  // Gets a default image with the query of flowers upon page load
  useEffect(() => {
    fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=flowers')
    .then(resp => resp.json())
    .then(data => {
        const randomIndex = Math.floor(Math.random() * (data.objectIDs.length)-1);
        setMessage("Current keyword: FLOWERS");
        return data.objectIDs[randomIndex];
    })
    .then(artworkID => getArtwork(artworkID));
  }, [])

  // Takes in an artwork ID, fetches the correct artwork object, and sets state to include the artwork
  function getArtwork(artworkID) {
    fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/'+artworkID)
    .then(resp => resp.json())
    .then(data => setCurrentArtwork(data));
  }

  return (
    <div className="metsearch-body box">
      <Title />
      <ArtworkForm getArtwork={getArtwork} setMessage={setMessage} message={message}/>
      <Artwork artwork={currentArtwork} message={message}/>
      <Footer/>
    </div>
  );
}

export default App;
