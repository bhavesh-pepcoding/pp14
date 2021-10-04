const fs = require("fs");

function callBack(i) {
    console.log(i , "file written successfully");
}

for(let i = 1; i <= 8; i++){
    let numberOfLines = generateRandomNumber();
    let string = "";
    for(let j = 0; j < numberOfLines; j++) {
        string += generateRandomNumber() + ( j != numberOfLines - 1 ? "\n" : "");
    }
    fs.writeFile(i + ".txt", string, callBack.bind(this,i));
}

function generateRandomNumber() {
    return Math.ceil(Math.random() * 100);
}