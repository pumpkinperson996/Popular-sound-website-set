import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import NavBar from './NavBar'; // Import the NavBar component
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./pages/HomePage";
import YoutubeMeme from "./youtube_meme";

function App() {
  return (
    <>
      <Header />
      <NavBar /> {/* Use the NavBar component */}
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/youtube-oil" element={<YoutubeMeme />} />
        {/* Replace component={...} with element={<... />} */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
