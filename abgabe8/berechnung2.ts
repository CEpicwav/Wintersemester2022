namespace abgabe8 {
    interface BIP {
        2015: number;
        2021: number;
    }

    let EU_Mitglieder: Map<string, BIP> = new Map([
        ["italy", { 2015: 1.8, 2021: 2.1 }],
        ["germany", { 2015: 3.4, 2021: 4.2 }],
        ["greece", { 2015: 0.2, 2021: 0.2 }],
        ["spain", { 2015: 1.2, 2021: 1.4 }],
    ]);

    // Zahlen in Bi. forEach= geht durch jedes einmal durch & speichert was angeguckt wurde in Land
    EU_Mitglieder.forEach((bip: BIP, land: string) => {
        console.log("\n\n" + "Der BIP von " + land + " war 2015: " + bip[2015] + " BILLIONEN US DOLLAR gestiegen.");
        console.log("Der BIP von " + land + " war 2021: " + bip[2021] + " BILLIONEN US DOLLAR gestiegen.");
        // console.log("Der BIP von Spanien ist seit 2015 um: " + (bip[2021] - bip[2015]).toFixed(1) + " BILLIONEN US DOLLAR gestiegen.");
    });

    init();

    function init() {
        let hoverElements = document.getElementsByClassName("wrapper");
        for (let i = 0; i < hoverElements.length; i++) {
            hoverElements[i].addEventListener("click", getInformationFromName);
        }
        let firstElement: HTMLDivElement = <HTMLDivElement>hoverElements[0];
        firstElement.click();
    }

    function getInformationFromName(_event) {
        for(let i = 0; i < document.getElementsByClassName("active").length; i++) {
            document.getElementsByClassName("active")[i].classList.remove("active");
        }
            
        _event.currentTarget.classList.add("active");
        let childOfClickedElement: HTMLElement = _event.currentTarget.firstElementChild;
        EU_Mitglieder.forEach((bip: BIP, land: string) => {
            if (land == childOfClickedElement.className) {
                getInformation(land, bip);
            }
        })
    }

    function getInformation(_land: string, _bipList: BIP) {

        let bip2015 = document.getElementById("bip2015");
        let bip2021 = document.getElementById("bip2021");

        bip2015.innerHTML = _bipList[2015].toString() + " Billionen";
        bip2021.innerHTML = _bipList[2021].toString() + " Billionen";

        let balken = document.getElementById("innerBalken");
        balken.style.width = (100 + (_bipList[2021] - _bipList[2015]) * 125).toString() + "px";
        if (_bipList[2021] - _bipList[2015] < 0) {
            balken.style.backgroundColor = "rgb(200, 0, 0)"
        } else if (_bipList[2021] - _bipList[2015] > 0) {
            balken.style.backgroundColor = "rgb(0, 200, 0)"
        } else {
            balken.style.backgroundColor = "rgb(200, 200, 0)"
        }
    }
}