var userNames = ["Qirat", "Aqsa", "Fatima", "Anosha"];
userNames = [];
if (userNames.length === 0) {
    console.log("your Array in Empty we need to find some user!");
}
else {
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like tu see a atatus report."));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
