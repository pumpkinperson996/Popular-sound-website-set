import React, { useState, useEffect } from 'react';

// Step 1: Define your list of videos
const videos = [
  { bvid: "BV1A24y1y7gF" },
  { bvid: "BV1oV411Q7tm" },
  { bvid: "BV1t14y1p7K5" },
  { bvid: "BV1Qa411y7Dz" },

  // Add more videos as needed
];

// Step 2: Function to calculate the index based on the current day
const getVideoIndexByDay = () => {
  const startOfYear = new Date(new Date().getFullYear(), 0, 0);
  const diff = new Date() - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  return dayOfYear % videos.length; // Use modulo to loop back to the first video
};

// Step 3: Create the React component
const VideoFrame = () => {
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    const index = getVideoIndexByDay(); // Calculate the daily index
    const video = videos[index]; // Get the video info from your list
    const url = `//www.bilibili.com/blackboard/html5mobileplayer.html?bvid=${video.bvid}&page=1`;
    setVideoUrl(url);
  }, []); // Empty dependency array means this runs once on mount

  return (
    <iframe 
      src={videoUrl} 
      border="0" 
      frameBorder="no" 
      frameSpacing="0" 
      allowFullScreen="true"
      style={{ width: '100%', height: '500px' }}> {/* Adjust width and height as needed */}
    </iframe>
  );
};

export default VideoFrame;
