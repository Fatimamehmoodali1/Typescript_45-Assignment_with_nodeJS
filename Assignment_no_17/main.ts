let guessList = ["Qirat","Fatima","Wajeeha","Zainab","Zara"];

let dontCome = guessList[0] ;
console.log(dontCome, "nhi AH sakti q ke is ki tabyat kharab hai ");
guessList.splice(0,1, "Safa")

console.log("Good News !! We Have Found a Biggest Table For Dinner .");

guessList.unshift("Muskii")

guessList.push("Shabaaz")

let middleIndex : number = Math.floor(guessList.length/2)

guessList.splice(middleIndex,0,"Musab")

console.log("Updated List of Our guests")

guessList.forEach(oneguest => console.log(`Salam ${oneguest}, Would you Like to Dinner with me`))

console.log("unfortunity, the new dinner tble want arrive on time , so i can only invite two guests to dinner with me")

while(guessList.length > 2){
    let removedGuest = guessList.pop();
    console.log(`Sorry ${removedGuest} I Can Invite You To Dinner`)
}
console.log("Invetition to the last 2 Guests");

guessList.forEach(lastTwo => console.log(`Luckly ${lastTwo}, you are still invite to dinner`))

guessList.pop();
guessList.pop();

console.log("Empty List: ",guessList);


