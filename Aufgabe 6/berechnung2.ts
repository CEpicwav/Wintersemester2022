interface EU_Mitglied {
    name: string;
    bipList: BIP;
}

interface BIP {
    2015: number;
    2021: number;
}

let Laender: EU_Mitglied[] = [
    {name: "Italien", bipList: { 2015: 1.8, 2021: 2.1 }}, 
    {name: "Deutschland", bipList: { 2015: 3.4, 2021: 4.2 }}, 
    {name: "Griechenland", bipList: { 2015: 0.2, 2021: 0.2 }}, 
    {name: "Spanien", bipList: {2015: 1.2, 2021: 1.4}},

];

// Zahlen in Bi. forEach= geht durch jedes einmal durch & speichert was angeguckt wurde in Land
Laender.forEach(land => {
    console.log("\n\n" + "Der BIP von "+ land.name + " war 2015: " + land.bipList[2015]  + " BILLIONEN US DOLLAR gestiegen.");
    console.log("Der BIP von "+ land.name + " war 2021: " + land.bipList[2021]  + " BILLIONEN US DOLLAR gestiegen.");
    console.log("Der BIP von Spanien ist seit 2015 um: " + (land.bipList[2021] - land.bipList[2015]).toFixed(1) + " BILLIONEN US DOLLAR gestiegen.");
});
