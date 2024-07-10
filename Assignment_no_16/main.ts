let guessList = ["Qirat","Wajeeha","Zainab","Zara"];

let dontCome = guessList[0] ;
console.log(dontCome, "Nhi AHH sakte hain");
guessList.splice(0,1, "Safa")

console.log("Good News !! We Have Found a Biggest Table For Dinner .");

guessList.unshift("Muskii")

guessList.push("Shabaaz")

let middleIndex : number = Math.floor(guessList.length/2)

guessList.splice(middleIndex,0,"Musab")

console.log("Updated List of Our guests")

guessList.forEach(oneguest => console.log(`Salam ${oneguest}, Would you Like to Dinner with me`))