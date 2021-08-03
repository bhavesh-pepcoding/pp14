// let str = "Bhavesh Bansal";
// let ans = "";

// for(let i = 0; i < str.length; i++) {
//     ans += str[i] + ", ";
// }

// console.log(ans);


// let str = "Bhavesh Bansal";

// for(let i = 0; i < str.length; i++) {
//     console.log(str.charCodeAt(i));
// }

// let str="jfuijihdfbbsdfsdfvsdfhvsbfsdfsdhfb";
// let count = 0;

// for(let i = 0; i < str.length; i++) {
//     if(str.charAt(i) == 'b') {
//         count++;
//     }
// }

// console.log(count);

// let number = "12";
// console.log(parseInt(number));
// let str = "23456";
// let ans = 0;

// for(let i = 0; i < str.length; i+=2) {
//     console.log(str.substr(i,2));
//     ans += parseInt(str.substr(i,2));
// }
// console.log(ans);
// let str = "1A2";
// let ans = 0;
// for(let i = 0; i < str.length; i++) {
//     if(!isNaN(str[i])) {
//         ans += parseInt(str[i]);
//     } else {
//         ans += str.charCodeAt(i);
//     }
// }
// console.log(ans);

// let str = "Bhavesh Bansal";
// let revstr = "";
// for(let i = str.length - 1; i >= 0; i--) {
//     revstr += str[i];
// }

// let sp = undefined;
// let ep = revstr.length;
// let ans = "";
// for(let i = revstr.length - 1; i >= 0; i--) {
//     if(revstr[i] == " ") {
//         sp = i + 1;
//         ans += revstr.substring(sp,ep) + " ";
//         ep = i;
//         sp = undefined;
//     } else if(i == 0) {
//         sp = 0;
//         ans += revstr.substring(sp,ep);
//     }
// }
// console.log(ans);

// let sp = 0;
// let ep = undefined;
// let ans = "";
// for(let i = 0; i <= revstr.length-1; i++) {
//     if(revstr[i] == " ") {
//         ep = i;
//         ans = " " + revstr.substring(sp,ep) + ans;
//         ep = undefined;
//         sp = i + 1;
//     } else if(i == (revstr.length - 1)) {
//         ep = revstr.length;
//         ans = revstr.substring(sp,ep) + ans;
//     }
// }
// console.log(ans);

// let str = "abbhba";
// let ans = true;
// for(let i = 0, j = str.length-1; i <= j; i++, j--) {
//     if(str[i] != str[j]) {
//         ans = false;
//         break;
//     }
// }

// console.log(ans);

