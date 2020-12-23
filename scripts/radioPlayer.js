export const radioPlayerInit = () => {
    const radio = document.querySelector('.radio');
    const radioCoverImg = document.querySelector('.radio-cover__img');
    const radioHeaderBig = document.querySelector('.radio-header__big');
    const radioNavigation = document.querySelector('.radio-navigation');
    const radioItem = document.querySelectorAll('.radio-item');
    const radioStop = document.querySelector('.radio-stop');

    //создаем обект аудио;
    const audio = new Audio();
    audio.type = 'audio/aac';

    //блокировка кнопки до выбора радиостанции
    radioStop.disabled = true;

    const changeIconPlay = () => {
        if(audio.paused) {
            radio.classList.remove('play');
            radioStop.classList.add('fa-play');
            radioStop.classList.remove('fa-stop');
        } else {
            radio.classList.add('play');
            radioStop.classList.add('fa-stop');
            radioStop.classList.remove('fa-play');
        }
    };

    const selectItem = elem => {
        //удаление обводки неактивного елемента при событии 
        radioItem.forEach(item => item.classList.remove('select'));
        /* додавления обводки к li при активации */
        elem.classList.add('select');
    }

    //прослушка события клика на радиостанцию
    radioNavigation.addEventListener('change', (event) => {
        const target = event.target;
        
        /* Получение li из html */
        const parrent = target.closest('.radio-item');
        selectItem(parrent)
       
        const title = parrent.querySelector('.radio-name').textContent;
        radioHeaderBig.textContent = title;

        const urlImg = parrent.querySelector('.radio-img').src;
        radioCoverImg.src = urlImg;

        //возможность остановить поток аудио
        radioStop.disabled = false;
        audio.src = target.dataset.radioStantion;
        audio.play();
        changeIconPlay();
    });

    radioStop.addEventListener('click', () => {
        if(audio.paused) {
            audio.play()
        } else {
            audio.pause();
        }
        changeIconPlay();
    });

    changeIconPlay();
    console.dir(audio)
}