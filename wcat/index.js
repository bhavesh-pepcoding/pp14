const fs = require("fs");
let arguments = process.argv.slice(2);

let flags = [];
let filenames = [];
let secondaryArguments = [];

for(let i of arguments) {
    if(i[0] == "-") {
        flags.push(i);
    } else if(i[0] == "$") {
        secondaryArguments.push(i.slice(1));
    } else {
        filenames.push(i);
    }
}

// if(flags.length == 0) {
//     for(let file of filenames) {
//         console.log(fs.readFileSync(file,"utf-8"));
//     }
// } else {
//     for(let flag of flags) {
//         if(flag == "-rs") {
//             for(let file of filenames) {
//                 let fileData = fs.readFileSync(file,"utf-8");
//                 console.log(fileData.split(" ").join(""));
//             }
//         } else if
//     }
// }


for(let file of filenames) {
    let fileData = fs.readFileSync(file,"utf-8");
    for(let flag of flags) {
        if(flag == "-rs") {
            fileData = removeAll(fileData," ");
        }
        if(flag == "-rn") {
            fileData = removeAll(fileData, "\r\n")
        }
        if(flag == "-rsc") {
            for(let secondaryArgument of secondaryArguments) {
                fileData = removeAll(fileData,secondaryArgument);
            }
        }
    }
    console.log(fileData);
}

function removeAll(string, removalData) {
    return string.split(removalData).join("");
}
