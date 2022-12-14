window.addEventListener("load", function () {
    var sounds = [
        new Audio("assets/hihat.mp3"),
        new Audio("assets/kick.mp3"),
        new Audio("assets/snare.mp3"),
        new Audio("assets/A.mp3"),
        new Audio("assets/C.mp3"),
        new Audio("assets/F.mp3"),
        new Audio("assets/G.mp3"),
        new Audio("assets/laugh-1.mp3"),
        new Audio("assets/laugh-2.mp3")
    ];
    var myInterval;
    var index = 0;
    var playback;
    function playSample(sound) {
        sound.play();
    }
    function playBeat() {
        if (document.querySelector("#play").getAttribute("class") == "fas fa-play") {
            document.querySelector("#play").setAttribute("class", "fas fa-pause");
            myInterval = setInterval(tone, 500);
        }
        else {
            document.querySelector("#play").setAttribute("class", "fas fa-play");
            clearInterval(myInterval);
        }
        function tone() {
            playSample(sounds[index]);
            index++;
            if (index == 3) {
                index = 0;
            }
        }
    }
    function deleteRemix() {
        clearInterval(myInterval);
        if (document.querySelector("#play").getAttribute("class") == "fas fa-pause") {
            document.querySelector("#play").setAttribute("class", "fas fa-play");
        }
    }
    function playRemix() {
        myInterval = setInterval(mix, 250);
        function mix() {
            index = Math.floor(Math.random() * 5);
            playSample(sounds[index]);
        }
        playback = true;
        if (playback == true) {
            document.querySelector("#play").setAttribute("class", "fas fa-pause");
        }
        else {
            document.querySelector("#play").setAttribute("class", "fas fa-play");
            clearInterval(myInterval);
        }
    }
    document.querySelector("#hihat").addEventListener("click", function () { playSample(sounds[0]); });
    document.querySelector("#kick").addEventListener("click", function () { playSample(sounds[1]); });
    document.querySelector("#snare").addEventListener("click", function () { playSample(sounds[2]); });
    document.querySelector("#noteA").addEventListener("click", function () { playSample(sounds[3]); });
    document.querySelector("#noteB").addEventListener("click", function () { playSample(sounds[4]); });
    document.querySelector("#noteC").addEventListener("click", function () { playSample(sounds[5]); });
    document.querySelector("#noteD").addEventListener("click", function () { playSample(sounds[6]); });
    document.querySelector("#laughter1").addEventListener("click", function () { playSample(sounds[7]); });
    document.querySelector("#laughter2").addEventListener("click", function () { playSample(sounds[8]); });
    document.querySelector("#play").addEventListener("click", function () { playBeat(); });
    document.querySelector("#remix").addEventListener("click", function () { playRemix(); });
    document.querySelector("#delete").addEventListener("click", function () { deleteRemix(); });
});
//# sourceMappingURL=script.js.map