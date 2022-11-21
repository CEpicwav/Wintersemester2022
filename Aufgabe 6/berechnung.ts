interface Land {
    2015: number;
    2021: number;
}

// Zahlen in Bi.
let Italien_BIP: Land = { 2015: 1.8, 2021: 2.1 };
let Deutschland_BIP: Land = { 2015: 3.4, 2021: 4.2 };
let Griechenland_BIP: Land = { 2015: 0.2, 2021: 0.2 };
let Spanien_BIP: Land = {2015: 1.2, 2021: 1.4};

console.log("\n\n" + "Der BIP von Italien war 2015: " + Italien_BIP[2015]);
console.log("Der BIP von Deutschland war 2015: " + Deutschland_BIP[2015]);
console.log("Der BIP von Griechenland war 2015: " + Griechenland_BIP[2015]);
console.log("Der BIP von Spanien war 2015: " + Spanien_BIP[2015]);

console.log("\n\n" + "Der BIP von Italien war 20121: " + Italien_BIP[2021]);
console.log("Der BIP von Deutschland war 20121: " + Deutschland_BIP[2021]);
console.log("Der BIP von Griechenland war 2021: " + Griechenland_BIP[2021]);
console.log("Der BIP von Spanien war 2021: " + Spanien_BIP[2021]);


console.log("\n\n" + "Der BIP von Italien ist seit 2015 um: " + (Italien_BIP[2021] - Italien_BIP[2015]).toFixed(1) + " Milliarden US DOLLAR gestiegen.");
console.log("Der BIP von Deustchland ist seit 2015 um: " + (Deutschland_BIP[2021] - Deutschland_BIP[2015]).toFixed(1) + " Milliarden US DOLLAR gestiegen.");
console.log("Der BIP von Griechenland ist seit 2015 um: " + (Griechenland_BIP[2021] - Griechenland_BIP[2015]).toFixed(1) + " Milliarden US DOLLAR gestiegen.");
console.log("Der BIP von Spanien ist seit 2015 um: " + (Spanien_BIP[2021] - Spanien_BIP[2015]).toFixed(1) + " Milliarden US DOLLAR gestiegen.");

