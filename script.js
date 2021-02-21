const playButton = document.querySelector('#play');
const video = document.querySelector('#video');
const progress = document.querySelector('#progress');
const progressBar = document.querySelector('#progressBar');
const skipButtons = document.querySelectorAll('.skip');
const volumeMeter = document.querySelector('#volume');
const videoControls =  document.querySelector('#videoControls');

function togglePlay(){

    if(video.paused){

        video.play();

    } else {

        video.pause();

    }

}

function updateButton(){

    if(video.paused){

        playButton.innerHTML = '►';

    } else {

        playButton.innerHTML = '❚ ❚';

    }

}

function handleProgress(){

    const percent = (video.currentTime / video.duration) * 100;

    progress.style.width = `${percent}%`;

}

function scrub(e){

    const scrubie = e.offsetX;

    const scrubTime = (scrubie/this.offsetWidth)* video.duration;

    video.currentTime = scrubTime;

}

function skip(){

    video.currentTime += parseFloat(this.dataset.skip);

}

function updateVolume(){

    video.volume = this.value;

    console.log(video.volume);

}

volumeMeter.addEventListener('change', updateVolume);

skipButtons.forEach(skipButton => skipButton.addEventListener('click', skip));

playButton.addEventListener('click', togglePlay);

video.addEventListener('timeupdate', handleProgress);

progressBar.addEventListener('click', scrub);

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('click', togglePlay);


//
//The following code is to make the controls appear when mouse hover over video
//

function showControls(){

    console.log(videoControls.offsetHeight);

    videoControls.style.transform = `translateY(-${videoControls.offsetHeight}px)`;

    videoControls.style.opacity = 1;

}

function hideControls(){

    console.log('Hello');

    videoControls.style.transform = `translateY(0px)`;

    videoControls.style.opacity = 0;

}

document.querySelector('#container').addEventListener('mouseover', showControls);
document.querySelector('#container').addEventListener('mouseout', hideControls);