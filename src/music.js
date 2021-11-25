// all element and tag id
const music=document.querySelector("audio");
const img=document.querySelector("img");
const play=document.getElementById("play");
const artist=document.getElementById("artist");
const title=document.getElementById("title");
const previous=document.getElementById("previous");
const next=document.getElementById("next");

// songs data with artist 
const song = [
  {
    name: "tu",
    title: "tu hai",
    artist: "noor",
  },
  {
    name: "bun",
    title: "tu hai",
    artist: "noor",
  },
];
var isPlay=false;

//  music play function
const musicPlay=()=>{
    isPlay=true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
}

//  music stop function
const stopMusic=()=>{
    isPlay=false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
}

// function for play and stop

play.addEventListener("click",()=>{
    isPlay? stopMusic():musicPlay();
})

// function for load data 
const loading=(e)=>{
    title.textContent=e.title;
    artist.textContent=e.artist;
    music.src=`song/${e.name}.mp3`
    img.src=`image/${e.name}.jpg`
}
var songIndex=0;

// for next song functionality
const nextSong=()=>{
    songIndex=(songIndex+1)%song.length;
    loading(song[songIndex]);
    musicPlay()
}
// for previous song functionality
const preSong=()=>{
       songIndex = (songIndex-1+song.length) % song.length;
          loading(song[songIndex]);
          musicPlay()
}
next.addEventListener("click",nextSong);
previous.addEventListener("click",preSong)