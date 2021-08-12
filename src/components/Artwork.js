import React from 'react';

const Artwork = ({artwork, message}) => {

    const artist = artwork.artistDisplayName ? ` ${artwork.artistDisplayName}` : "Unknown";
    const title = artwork.title;
    const medium = artwork.medium;
    const image = artwork.primaryImage;

    if (artwork.title) {
        return (
            <div>
                <div className="artwork box">
                    
                    {console.log(artist)}
                    {console.log(artwork.artistDisplayName)}
                    {console.log(artwork)}
    
                    <h2>{title}</h2>
                    <h3>Artist: <strong>{artist}</strong></h3>
                    <h3>Medium: <strong>{medium}</strong></h3>
                    <img src={image} alt={title} />
                </div>
            </div>
        )
    } else {
        return (
            <div className="artwork">
                <h2>Loading...</h2>
            </div>
        )
    }
    
}

export default Artwork;