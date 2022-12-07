const sounda = new Audio('sounds/a.mp3.mp3');
const soundc = new Audio('sounds/c.mp3.mp3');
const soundf = new Audio('sounds/f.mp3.mp3');
const soundd = new Audio('sounds/d.mp3.mp3');
const sounde = new Audio('sounds/e.mp3.mp3');
const soundsnare = new Audio('sounds/snare.mp3.mp3');
const soundlaugh = new Audio('sounds/laugh.mp3.mp3');
const soundkick = new Audio('sounds/kick.mp3.mp3');
const soundhihat = new Audio('sounds/hihat.mp3.mp3');
function playSample(sound) {
    sound.play()
}
document.querySelector(".a").addEventListener("click", function () {
    playSample(sounda)
})
document.querySelector(".c").addEventListener("click", function () {
    playSample(soundc)
})
document.querySelector(".f").addEventListener("click", function () {
    playSample(soundf)
})
document.querySelector(".d").addEventListener("click", function () {
    playSample(soundd)
})
document.querySelector(".e").addEventListener("click", function () {
    playSample(sounde)
})
document.querySelector(".snare").addEventListener("click", function () {
    playSample(soundsnare)
})
document.querySelector(".laugh").addEventListener("click", function () {
    playSample(soundlaugh)
})
document.querySelector(".kick").addEventListener("click", function () {
    playSample(soundkick)
})
document.querySelector(".hihat").addEventListener("click", function () {
    playSample(soundhihat)

})

const beat: string[] = [('kick.mp3.mp3'),('hihat.mp3.mp3'),("snare.mp3.mp3")]
const zaehler: number = 0;
document.querySelector("#play-button").addEventListener("click",function(){})
function playThis(soundQuelle: string):void {
const sound: HTMLAudioElement = new Audio(soundQuelle);
sound.play ()

}
function playBeat(): void{
setInterval(function ():void {
playThis(beat[zaehler]);
console.log ("test");
zaehler++;
if (zaehler== 3)  {
zaehler= 0;

}
},500);
    



}