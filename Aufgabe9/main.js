let Sounds = [("./assets/A.mp3"), ("./assets/C.mp3"), ("./assets/F.mp3"), ("./assets/G.mp3"),
    ("./assets/hihat.mp3"), ("./assets/kick.mp3"), ("./assets/laugh-1.mp3"), ("./assets/laugh-2.mp3"),
    ("./assets/snare.mp3")];
let beat = [Sounds[5], Sounds[4], Sounds[8], Sounds[4],];
let beatremix;
let nIntervID;
let nIntervID2;
let zaehler = 0;
let zaehler2 = 0;
const playbutton = document.querySelector(".fa-play");
const stopbutton = document.querySelector(".fa-stop");
window.addEventListener("load", addClickListenersDrumPad);
function playSample(soundquelle) {
    let sound = new Audio(soundquelle);
    sound.play();
}
let loop = function () {
    playSample(beat[zaehler]);
    zaehler++;
    if (zaehler === 4) {
        zaehler = 0;
    }
};
function playBeat() {
    if (!nIntervID) {
        nIntervID = setInterval(loop, 350);
    }
}
function stoploop() {
    clearInterval(nIntervID);
    clearInterval(nIntervID2);
    nIntervID = null;
    nIntervID2 = null;
}
function switchbutton() {
    if (playbutton.style.visibility == "hidden") {
        playbutton.style.visibility = "visible";
        stopbutton.style.visibility = "hidden";
    }
    else {
        playbutton.style.visibility = "hidden";
        stopbutton.style.visibility = "visible";
    }
}
function switchbuttonstp() {
    if (stopbutton.style.visibility == "visible") {
        playbutton.style.visibility = "visible";
        stopbutton.style.visibility = "hidden";
    }
    else {
        playbutton.style.visibility = "hidden";
        stopbutton.style.visibility = "visible";
    }
}
function switchbuttonrmx() {
    if (playbutton.style.visibility == "hidden") {
        playbutton.style.visibility = "hidden";
        stopbutton.style.visibility = "visible";
    }
    else {
        playbutton.style.visibility = "hidden";
        stopbutton.style.visibility = "visible";
    }
}
let remix = function () {
    zaehler2 = Math.floor(Math.random() * 9);
    playSample(Sounds[zaehler2]);
};
function remixplay() {
    if (!nIntervID2) {
        nIntervID2 = setInterval(remix, 350);
    }
    clearInterval(nIntervID);
}
function addClickListenersDrumPad() {
    document.querySelector(".a").addEventListener("click", function () { playSample(Sounds[5]); });
    document.querySelector(".b").addEventListener("click", function () { playSample(Sounds[8]); });
    document.querySelector(".c").addEventListener("click", function () { playSample(Sounds[4]); });
    document.querySelector(".d").addEventListener("click", function () { playSample(Sounds[0]); });
    document.querySelector(".e").addEventListener("click", function () { playSample(Sounds[1]); });
    document.querySelector(".f").addEventListener("click", function () { playSample(Sounds[2]); });
    document.querySelector(".g").addEventListener("click", function () { playSample(Sounds[3]); });
    document.querySelector(".h").addEventListener("click", function () { playSample(Sounds[6]); });
    document.querySelector(".i").addEventListener("click", function () { playSample(Sounds[7]); });
    document.querySelector(".fa-play").addEventListener("click", function () { playBeat(); });
    document.querySelector(".fa-play").addEventListener("click", function () { switchbutton(); });
    document.querySelector(".fa-stop").addEventListener("click", function () { switchbuttonstp(); });
    document.querySelector(".fa-stop").addEventListener("click", function () { stoploop(); });
    document.querySelector("#remixb").addEventListener("click", remixplay);
    document.querySelector("#remixb").addEventListener("click", function () { switchbuttonrmx(); });
}
//# sourceMappingURL=main.js.map