let Sounds: string[] = [("./assets/A.mp3"),("./assets/C.mp3"),("./assets/F.mp3"),("./assets/G.mp3"),
("./assets/hihat.mp3"),("./assets/kick.mp3"),("./assets/laugh-1.mp3"),("./assets/laugh-2.mp3"),
("./assets/snare.mp3")];

let beat: string[] = [Sounds[5], Sounds[4], Sounds[8], Sounds[4],];
let beatremix: number;
let nIntervID;
let nIntervID2;

let zaehler: number = 0;
let zaehler2: number = 0;

const playbutton:any= document.querySelector(".fa-play");

const stopbutton:any= document.querySelector(".fa-stop");

window.addEventListener("load" , addClickListenersDrumPad)

function playSample(soundquelle: string):void {
    let sound: HTMLAudioElement = new Audio(soundquelle);
    sound.play();
}

let loop:any = function (): void{
    playSample (beat[zaehler]);
    zaehler ++;
    if(zaehler === 4) {
        zaehler = 0;
    }
    }


function playBeat(): void{
         if(!nIntervID) {
            nIntervID = setInterval(loop , 350)
         }
   
    }

function stoploop(): void{
    clearInterval(nIntervID);
    clearInterval(nIntervID2);
    nIntervID = null;
    nIntervID2 = null;
}

function switchbutton(): void{
    if (playbutton.style.visibility == "hidden")
    {
        playbutton.style.visibility = "visible";
        stopbutton.style.visibility = "hidden";
    }
    else{
        playbutton.style.visibility = "hidden";
        stopbutton.style.visibility = "visible";
    }
}
function switchbuttonstp(): void{
    if (stopbutton.style.visibility == "visible")
    {
        playbutton.style.visibility = "visible";
        stopbutton.style.visibility = "hidden";
    }
    else{
        playbutton.style.visibility = "hidden";
        stopbutton.style.visibility = "visible";
    }

}
function switchbuttonrmx(){
    if (playbutton.style.visibility == "hidden")
    {
        playbutton.style.visibility = "hidden";
        stopbutton.style.visibility = "visible";
    }
    else{
        playbutton.style.visibility = "hidden";
        stopbutton.style.visibility = "visible";
    }

}


let remix:any= function(){
    zaehler2 = Math.floor(Math.random ()*9)
        playSample( Sounds [zaehler2]);
        
    };
function remixplay() {
    if(!nIntervID2) {
        nIntervID2 = setInterval(remix , 350)
     }
        clearInterval(nIntervID);
    
}   


function addClickListenersDrumPad():void{
    document.querySelector(".a").addEventListener("click", function(): void {playSample(Sounds[5]);});
    document.querySelector(".b").addEventListener("click", function(): void {playSample(Sounds[8]);});
    document.querySelector(".c").addEventListener("click", function(): void {playSample(Sounds[4]);});
    document.querySelector(".d").addEventListener("click", function(): void {playSample(Sounds[0]);});
    document.querySelector(".e").addEventListener("click", function(): void {playSample(Sounds[1]);});
    document.querySelector(".f").addEventListener("click", function(): void {playSample(Sounds[2]);});
    document.querySelector(".g").addEventListener("click", function(): void {playSample(Sounds[3]);});
    document.querySelector(".h").addEventListener("click", function(): void {playSample(Sounds[6]);});
    document.querySelector(".i").addEventListener("click", function(): void {playSample(Sounds[7]);});
    document.querySelector(".fa-play").addEventListener("click", function(): void {playBeat();});
    document.querySelector(".fa-play").addEventListener("click", function(): void {switchbutton();});
    document.querySelector(".fa-stop").addEventListener("click", function(): void {switchbuttonstp();});
    document.querySelector(".fa-stop").addEventListener("click", function(): void {stoploop();});
    document.querySelector("#remixb").addEventListener("click", remixplay);
    document.querySelector("#remixb").addEventListener("click", function():void {switchbuttonrmx();});
}











