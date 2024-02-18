import React from 'react';

import SoundCard from '../SoundCard';



import baba from '../assets/黑手/88.mp3';
import bihua from '../assets/黑手/比划.mp3';
import bihuaheishou from '../assets/黑手/比划黑手.mp3';
import geilian from '../assets/黑手/给你脸给多了.mp3';
import dog from '../assets/黑手/跟狗一样.mp3';
import hsh from '../assets/黑手/真没见过hsh.mp3';
import cnm from '../assets/黑手/cnm.mp3';


import bigbrother from '../assets/黑手/bigbrother.jpg';



function heishou(){
    return(
        <div className="cards-container">
          <SoundCard
            title="粑粑"
            imageSrc={bigbrother}
            soundSrc={baba}
          />
          {/* Add more SoundCard components with different props as needed */}
          <SoundCard
            title="比划黑手"
            imageSrc={bigbrother}
            soundSrc={bihuaheishou}
          />
          <SoundCard
            title="给你脸给多了"
            imageSrc={bigbrother}
            soundSrc={geilian}
          />
          <SoundCard
            title="真没见过hsh"
            imageSrc={bigbrother}
            soundSrc={hsh}
          />
          <SoundCard
            title="cnm"
            imageSrc={bigbrother}
            soundSrc={cnm}
          />
          <SoundCard
            title="跟狗一样"
            imageSrc={bigbrother}
            soundSrc={dog}
          />
          <SoundCard
            title="比划"
            imageSrc={bigbrother}
            soundSrc={bihua}
          />
          
          
        </div>
    );
}
export default heishou
