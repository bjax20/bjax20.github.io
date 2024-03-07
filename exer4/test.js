const {generateUniqueID, addAccount} = require("./index");

// Test Cases


// Valid
console.log(generateUniqueID("Bruno", "Madrigal"));
addAccount(["Anna", "Cruz", "annacruz@up.edu.ph", 18]);
addAccount(["Bill", "Evangelista", "annacruz@up.edu.ph", 21]);
addAccount(["Juan", "Dela Cruz", "jbdelacruz@up.edu.ph", 99]);

// Invalid
addAccount(["", "Evangelista", "annacruz@up.edu.ph", 21]); // empty string
addAccount(["Childy", "Reyes", "imakid@gmail.com", 9]); // minor
addAccount(["", "", "noname", 19]); // empty string
addAccount(["lackArguments@gmail.com", 19]); // lack arguments



