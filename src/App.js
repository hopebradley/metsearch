import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [ currentArtwork, setCurrentArtwork ] = useState({});

  // Gets a default image with the query of flowers upon page load
  useEffect(() => {
    fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=flowers')
    .then(resp => resp.json())
    .then(data => {
        const randomIndex = Math.floor(Math.random() * (data.objectIDs.length)-1);
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
    <div>
      <Artwork artwork={currentArtwork} />
    </div>
  );
}

export default App;
