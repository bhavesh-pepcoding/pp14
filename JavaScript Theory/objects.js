// let person = {
//     "name": "Bhavesh",
//     age: 23,
//     0: "hello"
// }
// person["company"] = "pepcoding";
// person.gender = "male";
// console.log(person);
// console.log(person);
// console.log(person["name"]);
// console.log(person.name)
// // console.log(person.age)
// console.log(person[0])

// let arr = [1, 2, 3, 4];
// let obj = {
//     0: 1,
//     1: 2,
//     2: 3,
//     3: 4
// }

// arr["name"] = "Bhavesh";
// console.log(arr.name);
// console.log(arr.length);

// console.log(Array.prototype.map)
// Array.prototype.name = "Bhavesh";
// String.prototype.len = function() {
//     console.log(this.length);
// }
// // let arr = [1,2,3,4];
// // console.log(arr.name);
// let str = "bhavesh bansal";
// str.len();

// let obj = {
//     obj2 : {
//         "hello": "1"
//     }
// }

// console.log(obj.obj2.hello);

// let obj = {
//     "hello": function() {
//         console.log("hello");
//     }
// }

// obj.hello();

// let obj = {
//     one : "hello1",
//     two : "hello2"
// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// for(let key in obj) {
//     console.log(obj[key]);
// }

// for(let i = 0; i < Object.keys(obj).length; i++) {
//     console.log(obj[Object.keys(obj)[i]]);
// }

// let obj = {
//     obj1 : {
//         "obj1.1" : { "obj1.1.1" : "hello1"}
//     },
//     obj2: {
//         "obj2.1" : "hello2.1",
//         "obj2.2" : "helo2.2"
//     }
// }

// for(let key in obj) {
//     console.log(key);
//     // if(typeof(obj[key]) == "object") {
//     //     for(let key2 in obj[key]) {
//     //         console.log(key2);
//     //     }
//     // }
// }

// function printKeys(obj) {
//     for(let key in obj) {
//         console.log(key);
//         if(typeof(obj[key]) == "object") {
//             printKeys(obj[key]);
//         }
//     }
// }
// printKeys(obj);

// let obj = {
//     "hello1" : {},
//     "hello2" : 2
// }

// let newobj = {...obj};
// newobj.hello1["hello1.1"] = "bhavesh";

// console.log(obj);
// let newObj = {};
// for(let key in obj) {
//     if(typeof(obj[key]) == "object") {
//         newObj[key] = {};
//     } else {
//         newObj[key] = obj[key]
//     }
// }

