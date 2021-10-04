const fs = require("fs");

function callBack(i) {
    console.log(i + " file Written Successfully");
}

fs.writeFile("temp.txt","temp",callBack.bind(this,1));
fs.writeFile("temp1.txt","temphello",callBack.bind(this,2));