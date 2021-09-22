const fs = require("fs");

async function abc() {
    fs.promises.writeFile("abc.txt", "hello").then(function () {
        console.log("file written successfully");
    });
    console.log("hello");
}
abc();