export const videoPlayerInit = () => {
     const videoPlayer = document.querySelector('.video-player');
     const videoButtonPlay = document.querySelector('.video-button__play');
     const videoButtonStop = document.querySelector('.video-button__stop');
     const videoTimePassed = document.querySelector('.video-time__passed');
     const videoProgress = document.querySelector('.video-progress');
     const videoTimeTotal = document.querySelector('.video-time__total');

    const toggle = () => {
        if(videoPlayer.paused) {
            videoButtonPlay.classList.remove('.fa-pause');
            videoButtonPlay.classList.add('.fa-play');
        } else {
            videoButtonPlay.classList.add('.fa-pause');
            videoButtonPlay.classList.remove('.fa-play');

        }
    }

     videoPlayer.addEventListener('click', () => {
         console.log(videoPlayer.paused)
         if(videoPlayer.paused) {
            videoPlayer.play();
         } else {
            videoPlayer.pause();
         }
     })
};