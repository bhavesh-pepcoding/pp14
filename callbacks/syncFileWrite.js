const fs = require("fs");

function callBack(fileNumber) {
    console.log(fileNumber, " file written Successfully");
    if(fileNumber == 8) {
        return;
    }
    writeFile(fileNumber + 1);
}

function writeFile(fileNumber) {
    fs.writeFile(fileNumber + ".txt","hello " + fileNumber, callBack.bind(this,fileNumber));
}

writeFile(1);