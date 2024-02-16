import React from 'react';
import metaltube from './assets/metaltube.png';
import metaldropsound from './assets/metaldropsound.mp4';

function YoutubeMeme() {
    // Function to handle image click
    const playSound = () => {
        // Create a new Audio object each time the function is called
        const audio = new Audio(metaldropsound);
        audio.play();
    };

    return (
        <div>
            {/* Render the image and set the onClick handler to playSound */}
            <img src={metaltube} alt="Metal Tube" onClick={playSound} style={{cursor: 'pointer'}} />
        </div>
    );
}

export default YoutubeMeme;
