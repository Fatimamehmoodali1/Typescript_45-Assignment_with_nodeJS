var current_user = ["Qirat", "Fatima", "Amal", "Osama"];
var new_user = ["Saim", "Sharim", "Habiba", "Hoorain"];
new_user.forEach(function (new_one_user) {
    var our_condition = current_user.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLocaleUpperCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is availible"));
    }
});
