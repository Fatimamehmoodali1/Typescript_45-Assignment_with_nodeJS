function makeSandwich(...items: string[]){
    console.log("\nMaking a Sandwich With the Following Items :\n");
    items.forEach(singleItems => console.log("-" + singleItems))
    console.log("\nNow enjoy Sandwich");
    
}

makeSandwich("Chicken","Sandwich","Mayo","Egg")
makeSandwich("Bread","Butter")
makeSandwich("Bread","Butter","Mayo","Egg","Cheese","Chicken","Tomato","Onion")