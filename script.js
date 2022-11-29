const audio1 = document.querySelector(`audio[data-key="65"]`);
const audio2 = document.querySelector(`audio[data-key="83"]`);
const audio3 = document.querySelector(`audio[data-key="68"]`);
const audio4 = document.querySelector(`audio[data-key="70"]`);
const audio5 = document.querySelector(`audio[data-key="71"]`);
const audio6 = document.querySelector(`audio[data-key="72"]`);
const audio7 = document.querySelector(`audio[data-key="74"]`);
const audio8 = document.querySelector(`audio[data-key="75"]`);
const audio9 = document.querySelector(`audio[data-key="76"]`);

const stopAudio = () => {
    audio1.pause(); audio2.pause(); audio3.pause(); audio4.pause(); audio5.pause();
    audio6.pause(); audio7.pause(); audio8.pause(); audio9.pause(); 
}

function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`); 
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}

function removeTransition(event) {
    if (event.propertyName !== "transform") return;
    this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key")
keys.forEach(key => key.addEventListener("transitionend", removeTransition))

window.addEventListener("keydown", playSound);

const sound1Audio = () => {
    const key = document.querySelector(`.key[data-key="65"]`);  
    stopAudio(); 
    audio1.currentTime = 0;
    audio1.play(); 
    key.classList.add("playing");
}
const sound2Audio = () => {
    const key = document.querySelector(`.key[data-key="83"]`);
    stopAudio(); 
    audio2.currentTime = 0;
    audio2.play();
    key.classList.add("playing");
}
const sound3Audio = () => {
    const key = document.querySelector(`.key[data-key="68"]`);
    stopAudio(); 
    audio3.currentTime = 0;
    audio3.play();
    key.classList.add("playing");
}
const sound4Audio = () => {
    const key = document.querySelector(`.key[data-key="70"]`);
    stopAudio(); 
    audio4.currentTime = 0;
    audio4.play();
    key.classList.add("playing");
}
const sound5Audio = () => {
    const key = document.querySelector(`.key[data-key="71"]`);
    stopAudio(); 
    audio5.currentTime = 0;
    audio5.play();
    key.classList.add("playing");
}
const sound6Audio = () => {
    const key = document.querySelector(`.key[data-key="72"]`);
    stopAudio(); 
    audio6.currentTime = 0;
    audio6.play();
    key.classList.add("playing");
}
const sound7Audio = () => {
    const key = document.querySelector(`.key[data-key="74"]`);
    stopAudio(); 
    audio7.currentTime = 0;
    audio7.play();
    key.classList.add("playing");
}
const sound8Audio = () => {
    const key = document.querySelector(`.key[data-key="75"]`);
    stopAudio(); 
    audio8.currentTime = 0;
    audio8.play();
    key.classList.add("playing");
}
const sound9Audio = () => {
    const key = document.querySelector(`.key[data-key="76"]`);
    stopAudio(); 
    audio9.currentTime = 0;
    audio9.play();
    key.classList.add("playing");
}
