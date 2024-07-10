"use strict";
let guessList = ["Faima", "Wajeeha", "Zainab", "Zara"];
let dontCome = guessList[0];
console.log(dontCome, "NHI a Sakhti");
guessList.splice(0, 1, "Safa");
guessList.forEach(guest => console.log(`Salam ${guest} Would U Like to Dinner With Me `));
