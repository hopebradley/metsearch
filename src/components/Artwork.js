import React from 'react';

const Artwork = ({artwork, message}) => {

    const artist = artwork.artistDisplayName ? `By ${artwork.artistDisplayName}` : "Unknown Artist";
    const title = artwork.title;
    const medium = artwork.medium;
    const image = artwork.primaryImage;


    return (
        <div>
            <div className="artwork box">
                <h3 className="message">{message}</h3>
                {console.log(artist)}
                {console.log(artwork.artistDisplayName)}
                {console.log(artwork)}

                <h2>{title}</h2>
                <h3>{artist}</h3>
                <p>Medium: {medium}</p>
                <img src={image} alt={title} />
            </div>
        </div>
    )
}

export default Artwork;