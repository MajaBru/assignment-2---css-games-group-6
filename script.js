// sound effect for reaching the goal
let sound = new Audio("assets/audio/bling_audio.mp3");
let endzone = document.querySelector(".map__overlay--victory");

let play = () => {
  sound.play();
  sound.volume = 0.7;
}
endzone.addEventListener('mouseover', play);

// background music toggler
let bgMusic = new Audio('assets/audio/music-arcade.mp3');
let toggleMusic = document.querySelector("#music__button")

toggleMusic.addEventListener("click", ()=> {
    if (bgMusic.paused) {
      bgMusic.play();
      bgMusic.loop=true;
      bgMusic.volume = 1;
      toggleMusic.innerHTML = "<i class='fas fa-stop'></i>"
    } else {
      bgMusic.pause();
      toggleMusic.innerHTML = "<i class='fas fa-play'></i>";
    }
  });