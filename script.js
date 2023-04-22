let sound = new Audio("/assets/audio/bling_audio.mp3");
let endzone = document.querySelector(".map__overlay--victory");

let play = () => {
  sound.play();
}
endzone.addEventListener('mouseover', play);

