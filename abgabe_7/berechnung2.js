var abgabe7;
(function (abgabe7) {
    let Laender = [
        { name: "italy", bipList: { 2015: 1.8, 2021: 2.1 } },
        { name: "germany", bipList: { 2015: 3.4, 2021: 4.2 } },
        { name: "greece", bipList: { 2015: 0.2, 2021: 0.2 } },
        { name: "spain", bipList: { 2015: 1.2, 2021: 1.4 } },
    ];
    // Zahlen in Bi. forEach= geht durch jedes einmal durch & speichert was angeguckt wurde in Land
    Laender.forEach(land => {
        console.log("\n\n" + "Der BIP von " + land.name + " war 2015: " + land.bipList[2015] + " BILLIONEN US DOLLAR gestiegen.");
        console.log("Der BIP von " + land.name + " war 2021: " + land.bipList[2021] + " BILLIONEN US DOLLAR gestiegen.");
        console.log("Der BIP von Spanien ist seit 2015 um: " + (land.bipList[2021] - land.bipList[2015]).toFixed(1) + " BILLIONEN US DOLLAR gestiegen.");
    });
    init();
    function init() {
        let hoverElements = document.getElementsByClassName("wrapper");
        for (let i = 0; i < hoverElements.length; i++) {
            hoverElements[i].addEventListener("click", () => {
                Laender.forEach(land => {
                    if (land.name == hoverElements[i].firstElementChild.className) {
                        getInformation(land);
                    }
                });
            });
        }
    }
    function getInformation(_land) {
        console.log(_land);
        let bip2015 = document.getElementById("bip2015");
        let bip2021 = document.getElementById("bip2021");
        bip2015.innerHTML = _land.bipList[2015].toString();
        bip2021.innerHTML = _land.bipList[2021].toString();
        let balken = document.getElementById("innerBalken");
        balken.style.width = (100 + (_land.bipList[2021] - _land.bipList[2015]) * 100).toString() + "px";
    }
})(abgabe7 || (abgabe7 = {}));
//# sourceMappingURL=berechnung2.js.map