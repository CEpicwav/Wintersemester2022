var abgabe8;
(function (abgabe8) {
    let EU_Mitglieder = new Map([
        ["italy", { 2015: 1.8, 2021: 2.1 }],
        ["germany", { 2015: 3.4, 2021: 4.2 }],
        ["greece", { 2015: 0.2, 2021: 0.2 }],
        ["spain", { 2015: 1.2, 2021: 1.4 }],
    ]);
    // Zahlen in Bi. forEach= geht durch jedes einmal durch & speichert was angeguckt wurde in Land
    EU_Mitglieder.forEach(land => {
        console.log("\n\n" + "Der BIP von " + land[0] + " war 2015: " + land[1][2015] + " BILLIONEN US DOLLAR gestiegen.");
        console.log("Der BIP von " + land[0] + " war 2021: " + land[1][2021] + " BILLIONEN US DOLLAR gestiegen.");
        console.log("Der BIP von Spanien ist seit 2015 um: " + (land[1][2021] - land[1][2015]).toFixed(1) + " BILLIONEN US DOLLAR gestiegen.");
    });
    init();
    let balken;
    function init() {
        let hoverElements = document.getElementsByClassName("wrapper");
        for (let i = 0; i < hoverElements.length; i++) {
            hoverElements[i].addEventListener("click", () => {
                EU_Mitglieder.get(hoverElements[i].firstElementChild.className);
            });
            hoverElements[i].addEventListener("click", getInformationFromName);
        }
    }
    function getInformationFromName(_event) {
        console.log(_event.currentTarget.firstElementChild);
        EU_Mitglieder.get(_event.currentTarget.firstElementChild);
    }
    function getInformation(_land) {
        let bip2015 = document.getElementById("bip2015");
        let bip2021 = document.getElementById("bip2021");
        bip2015.innerHTML = _land.bipList[2015].toString();
        bip2021.innerHTML = _land.bipList[2021].toString();
        let balken = document.getElementById("innerBalken");
        balken.style.width = (100 + (_land.bipList[2021] - _land.bipList[2015]) * 100).toString() + "px";
    }
})(abgabe8 || (abgabe8 = {}));
//# sourceMappingURL=berechnung2.js.map