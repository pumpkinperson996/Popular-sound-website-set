import React from 'react';

import SoundCard from '../SoundCard';



import metaltube from '../assets/youtubeOil/pic/metaltube.png';
import augpic from '../assets/youtubeOil/pic/augg.png';
import bababoypic from '../assets/youtubeOil/pic/bababoy.png';
import huadongPic from '../assets/youtubeOil/pic/滑动变阻器.png';
import samsungPic from '../assets/youtubeOil/pic/三星手机铃声.png';



import metaldropsound from '../assets/youtubeOil/audio/metaldropsound.mp4';
import augaud from '../assets/youtubeOil/audio/auggggg.mp4';
import bababoyaud from '../assets/youtubeOil/audio/bababoy.mp4';
import huadongAud from '../assets/youtubeOil/audio/runaway.mp4';
import samsungAud from '../assets/youtubeOil/audio/samsung.mp4';



function YoutubeMeme() {
    

    return (
        <div>
          <SoundCard
            title="Metal Drop"
            imageSrc={metaltube}
            soundSrc={metaldropsound}
          />
          {/* Add more SoundCard components with different props as needed */}

          <SoundCard
            title="AUGGGGGGGGGG"
            imageSrc={augpic}
            soundSrc={augaud}
          />

          <SoundCard
            title="Bababoy"
            imageSrc={bababoypic}
            soundSrc={bababoyaud}
          />

          <SoundCard
            title="uwu"
            imageSrc={huadongPic}
            soundSrc={huadongAud}
          />

          <SoundCard
            title="samsung"
            imageSrc={samsungPic}
            soundSrc={samsungAud}
          />
        </div>
      );
}



export default YoutubeMeme
