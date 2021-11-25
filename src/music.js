const music=document.querySelector("audio");
const img=document.querySelector("image");
const play=document.getElementById("play");
const artist=document.getElementById("artist");
const title=document.getElementById("title");
const previous=document.getElementById("previous");
const next=document.getElementById("next");
const music=[
    {
        name:"tu",
        title:"tu hai",
        artist:"noor"
    }
]
var isPlay=false;
const musicPlay=()=>{
    isPlay=true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
}
const stopMusic=()=>{
    isPlay=false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
}
play.addEventListener("click",()=>{
    isPlay? stopMusic():musicPlay();
})