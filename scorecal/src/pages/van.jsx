import React from 'react';

import SoundCard from '../SoundCard';



import a from '../assets/VanMusic/1VanMusic.mp3';
import b from '../assets/VanMusic/2VanMusic.mp3';
import c from '../assets/VanMusic/3VanMusic.mp3';
import d from '../assets/VanMusic/4VanMusic.mp3';
import e from '../assets/VanMusic/5VanMusic.mp3';
import f from '../assets/VanMusic/6VanMusic.mp3';
import g from '../assets/VanMusic/7VanMusic.mp3';
// import h from '../assets/VanMusic/8VanMusic';
// import i from '../assets/VanMusic/9VanMusic';
// import j from '../assets/VanMusic/10VanMusic';
// import k from '../assets/VanMusic/11VanMusic';



import vanpic from '../assets/VanMusic/vanpic.png';



function van(){
    return(
        <div className="cards-container">
          <SoundCard
            title=""
            imageSrc={vanpic}
            soundSrc={a}
          />
          {/* Add more SoundCard components with different props as needed */}
          <SoundCard
            title="比划黑手"
            imageSrc={vanpic}
            soundSrc={b}
          />
          <SoundCard
            title="给你脸给多了"
            imageSrc={vanpic}
            soundSrc={c}
          />
          <SoundCard
            title="真没见过hsh"
            imageSrc={vanpic}
            soundSrc={d}
          />
          <SoundCard
            title="cnm"
            imageSrc={vanpic}
            soundSrc={e}
          />
          <SoundCard
            title="跟狗一样"
            imageSrc={vanpic}
            soundSrc={f}
          />
          <SoundCard
            title="比划"
            imageSrc={vanpic}
            soundSrc={g}
          />
          
          
        </div>
    );
}
export default van
