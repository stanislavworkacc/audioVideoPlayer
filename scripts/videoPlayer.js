export const videoPlayerInit = () => {
     const videoPlayer = document.querySelector('.video-player');
     const videoButtonPlay = document.querySelector('.video-button__play');
     const videoButtonStop = document.querySelector('.video-button__stop');
     const videoTimePassed = document.querySelector('.video-time__passed');
     const videoProgress = document.querySelector('.video-progress');
     const videoTimeTotal = document.querySelector('.video-time__total');
     const videoVolume = document.querySelector('.video-volume');
     const offVolume = document.querySelector('.video-icon-off');
     const maxVolume = document.querySelector('.video-icon-max');
     const videoFullscreeen = document.querySelector('.video-fullscreeen');

    
     let counter = 0;
     let lastChangeVolume = 0;
    
     //функция смена иконки PLAY - PAUSE;

    videoPlayer.addEventListener('fullscreenchange', () => {
        if(document.fullscreen) {
            videoPlayer.controls = true;
        } else {
            videoPlayer.controls = false;
        }
    });

    const toggleIcon = () => {
        if(videoPlayer.paused) {
            videoButtonPlay.classList.remove('fa-pause');
            videoButtonPlay.classList.add('fa-play');
        } else {
            videoButtonPlay.classList.add('fa-pause');
            videoButtonPlay.classList.remove('fa-play');

        }
    }

    //функция проверка условия TRUE/FALSE : PAUSE/PLAY;
    const togglePlay = (event) => {
        event.preventDefault();
        if(videoPlayer.paused) {
            videoPlayer.play();
         } else {
            videoPlayer.pause();
         }
    };

    const stopPlay = () => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    };
    
    
    const addZero = n => n < 10 ? '0' + n : n;

    const changeValue = () => {
            const value = (videoVolume.value) / 100;
            videoPlayer.volume = value;
            lastChangeVolume = videoVolume.value;
    }

    const offVolumeRange = () => {
        if(counter === 0) {
            videoPlayer.volume = 0;
            videoVolume.value = 0;
            counter++;
        } else if(counter === 1) {
            videoPlayer.volume = lastChangeVolume / 100;
            videoVolume.value = lastChangeVolume;
            counter--;
            }
    };

    const maxValume = () => {
        if(counter === 0) {
            videoPlayer.volume = 1;
            videoVolume.value = 100;
            counter++;
        } else if(counter === 1) {
            videoPlayer.volume = lastChangeVolume / 100;;
            videoVolume.value = lastChangeVolume;
            counter--;
        }
    };

    //отслеживание события: ЗАПУСК/ПАУЗА потока видео;
     videoPlayer.addEventListener('click', togglePlay);
     videoButtonPlay.addEventListener('click', togglePlay);

     //отслеживание события: смена иконки плеера PLAY/PAUSE;
     videoPlayer.addEventListener('play', toggleIcon);
     videoPlayer.addEventListener('pause', toggleIcon);
    
    //отлеживание события: сброс видео в начальную точку
     videoButtonStop.addEventListener('click', stopPlay);

     //отслеживание события timeUpdate: сколько осталось до конца
     videoPlayer.addEventListener('timeupdate', () => {
         //осталось до конца
        const currentTime = videoPlayer.currentTime;
        //общая длина видео
        const duration = videoPlayer.duration;

        videoProgress.value = (currentTime / duration) * 100;

        //переменная: сохранения длительности произведения видео в минутах
        let minutePassed = Math.floor(currentTime / 60);
        //переменная: сохранения длительности произведения видео в секундах
        let secondsPassed = Math.floor(currentTime % 60);
        
        let minuteTotal = Math.floor(duration / 60);
        let secondsTotal = Math.floor(duration % 60);

        //вывод на страницу: сколько пройшло времени - осталось
        videoTimePassed.textContent = `${addZero(minutePassed)}:${addZero(secondsPassed)}`;
        videoTimeTotal.textContent = `${addZero(minuteTotal)}:${addZero(secondsTotal)}`;

     });
     
     videoProgress.addEventListener('input', () => {
        const duration = videoPlayer.duration;
        const value = videoProgress.value

        videoPlayer.currentTime = (value * duration) / 100;
     });

     videoVolume.addEventListener('input', changeValue);

     offVolume.addEventListener('click', offVolumeRange);
     maxVolume.addEventListener('click', maxValume);

     videoFullscreeen.addEventListener('click', () => {
        videoPlayer.requestFullscreen();
     });


     changeValue();
};