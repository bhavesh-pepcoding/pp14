// new array creation

// let arr = [];
// let arr = new Array();
// console.log(arr);

// let arr = ["bhavesh", 23, 45.4, true, 'b'];
// console.log(arr);

// arr.push("hello");
// console.log(arr);
// arr.pop();
// console.log(arr);
// console.log(arr.length);

// let arr = [];
// arr[25] = 5;
// console.log(arr[25]);

// let str1 = "Bhavesh";
// let str2 = "Bhavesh Bansal";
// let str3 = "Apple,Mango,Banana";

// console.log(str1.split(""));
// console.log(str2.split(" "));
// console.log(str3.split(","));

// let arr = ["a","b","c","d"];

// console.log(arr.join(""));
// console.log(arr.join("#"));
// console.log(arr.join("|"));

// let arr1 = ["a","b","c"];
// let arr2 = ["d","e","f"];
// console.log(arr1.concat(arr2));

// let arr = [1,2,3,4,5,6];

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// traverse and get the indexes
// for(let i in arr) {
//     console.log(parseInt(i));
// }

//traverse and get the value

// for(let i of arr) {
//     console.log(i);
// }

// console.log("a" + 1 + 2); // string concatenation

// console.log(1 + 2 + "a"); // first integer addition then string concatenation

// console.log(String.fromCharCode("a".charCodeAt(0) + 1)); 

// most important methods of array

// const arr = [1,2,3,4,5,6];

// arr[3] = 7; // internal reas
// arr = [1,2,3]
// console.log(arr);

// let arr = ["a","b","c","d"];

// function temp (myarg,myarg2,myarg3) {
//     console.log(myarg,myarg2,myarg3);
// }
// arr.forEach(temp);


// function myForEach (array, callBackFn) {
//     for(let i = 0; i < array.length; i++) {
//         callBackFn(array[i], i, array);
//     }

// }

// let arr = [1,2,3,4];
// myForEach(arr,call)

// function call(value,index,array) {
//     console.log(value,index,array);
// }

// let arr = [1,2,3,4];
// for(let i = 0; i < arr.length; i++) {
//     arr[i] += 2;
// }

// function callbackFn (value) {
//     return value + 2;
// }

// arr = arr.map(callbackFn);

// console.log(arr.slice(1,3));

// let deletedArray = arr.splice(1,1);
// console.log(deletedArray);
// console.log(arr);

// let arr = [1,2,3,3,5,4,5,6,7,8,9];

// let temparr = [...arr]; copying an array

// for(let i = arr.length - 1; i >= 0; i--) {
//     if(arr[i] % 2 == 1) {
//         arr.splice(i,1);
//     }
// }
// console.log(arr);

// arr = arr.filter(function(value) {
    // if(value % 2 == 1) {
    //     return false;
    // } else {
    //     return true;
    // }
    // return value % 2 == 0;
// })
// console.log(arr);

// let arr = [2, 3, 5, 33, 4, 1];
// console.log(arr.sort(function(a,b){
//     // console.log(a,b);
//     if(a > b) {
//         return 1;
//     } else if( a == b) {
//         return 0;
//     } else {
//         return -1;
//     }
// }));

// if no repeated number in array
// console.log(arr.sort(function(a,b){
//     // console.log(a,b);
//     if(a > b) {
//         return true;
//     } else {
//         return false;
//     }
// }));

// console.log(arr.sort());
// console.log(arr.includes(6));

// let arr = [100,20];
// console.log(arr.sort());