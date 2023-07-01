console.log("welcome")

let songIndex=0;
let audioElement= new Audio('song.mp3')
let masterPlay = document.getElementById('masterPlay')
let myprogressbar= document.getElementById('progressbar')
let gif= document.getElementById('gif');
let songs= [
    {songname: "Am I Dreaming", filepath: "Am I Dreaming.mp3"},
    {songname: "Calling", filepath: "Calling.mp3"},
    {songname: "Annihilate", filepath: "Annihilate.mp3"},
    {songname: "Sunlower", filepath: "song.mp3"},
    
]

//audioElement.play();
//Hndle pause/ play click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity= 1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity= 0;

    }
})
//listen events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate')
    // update seekbar
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myprogressbar.value = progress

})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = (myprogressbar.value * audioElement.duration)/100
})
