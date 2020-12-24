import { radioPlayerInit } from './radioPlayer.js';
import { musicPlayerInit } from './musicPlayer.js';
import { videoPlayerInit } from './videoPlayer.js';

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlocks = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');


const deactivationPlayer = () => {
    temp.style.display = 'none';
    playerBtn.forEach(item => item.classList.remove('active'));
    playerBlocks.forEach(item => item.classList.remove('active'));

    radioPlayerInit.stop();
    videoPlayerInit.stop();
    musicPlayerInit.stop();
};


playerBtn.forEach((btn, index) => btn.addEventListener('click', () => {
        deactivationPlayer();
        btn.classList.add('active');
        playerBlocks[index].classList.add('active')
    })
);

console.log('dsadsadsadsadsadsadsadsadsadsa')

radioPlayerInit();
musicPlayerInit();
videoPlayerInit();

