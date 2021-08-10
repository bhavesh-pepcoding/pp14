// function abc(){
//     var a = 10;
//     // console.log(a);
// }
// console.log(a);

// let a = 10;
// {
//     let a = 10;
//     console.log(a);
// }
// console.log(a);

let arr = [2, 3, 5, 33, 4, 1]; 
arr.sort(function(a, b){
   if(a>b){
       return true;
   } 
   return false;
});
console.log(arr);

// let arr = [2, 3, 5, 33, 4, 1]; 
// arr.sort(function(a, b){
//    if(a>b){
//        return 1;
//    } 
//    return -1;
// });
// console.log(arr);