import React, { useState } from 'react';

function SoundCard({ title, imageSrc, soundSrc }) {
    // State to manage if the image is rotating
    const [isRotating, setIsRotating] = useState(false);

    // Combined function to handle image click for playing sound and rotating the image
    const playSoundAndRotate = () => {
        // Create a new Audio object and play the sound
        const audio = new Audio(soundSrc);
        audio.play();

        // Start the rotation
        setIsRotating(true);

        // Reset the rotation state after the animation completes, assume 1s for the animation
        setTimeout(() => {
            setIsRotating(false);
        }, 1000); // This duration should match your CSS animation duration
    };

    return (
        <div className="card">
            <img
                className={`card-image ${isRotating ? 'rotate' : ''}`}
                src={imageSrc}
                alt={title}
                onClick={playSoundAndRotate} // Make sure this matches the function name
                style={{ cursor: 'pointer' }}
            />
            <h2 className="card-title">{title}</h2>
        </div>
    );
}

export default SoundCard;
