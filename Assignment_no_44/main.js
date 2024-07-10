function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a Sandwich With the Following Items :\n");
    items.forEach(function (singleItems) { return console.log("-" + singleItems); });
    console.log("\nNow enjoy Sandwich");
}
makeSandwich("Chicken", "Sandwich", "Mayo", "Egg");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "Tomato", "Onion");
