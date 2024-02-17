import React from 'react';

function SoundCard({ title, imageSrc, soundSrc }) {
    // Function to handle image click
    const playSound = () => {
        // Create a new Audio object each time the function is called
        const audio = new Audio(soundSrc);
        audio.play();
    };
    return (
        <div className="card">
            <img
                className="card-image"
                src={imageSrc}
                alt={title}
                onClick={playSound}
                style={{ cursor: 'pointer' }}
            />
            <h2 className="card-title">{title}</h2>
        </div>
    );
}
export default SoundCard