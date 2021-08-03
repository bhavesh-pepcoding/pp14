// Three ways to create a string

// let firstName = "Bhavesh";
// let lastName = 'Bansal';
// let age = 20;

// console.log(firstName + " " + lastName);

// let fullName = `${firstName} ${lastName}`;
// console.log(`my age is ${age}`);
// console.log('my age is ' + age);

// String methods

//length of string

// let str = "Bhavesh Bansal";
// console.log(str.length);

// console.log(str.slice(-1,-14));
// console.log(str.substring(2,6));

// console.log(str.substr(2,6));

// trim method

// let str = "              bhavesh bansal                        ";
// console.log(str.length);
// console.log(str.trim().length);

// replace method

// let str ="bhavesh avesh bansal";
// console.log(str.replace("avesh","manish"));

// let str = "bhavesh bansal";
// console.log(str.toUpperCase());

// let str2 = "BHAVESH BANSAL";
// console.log(str2.toLowerCase());

let str = "Bhavesh";
// console.log(str.charAt(1));
// console.log(str.charCodeAt(0));

console.log(str[1]);

str[0] = "A"; // strings are immutable
console.log(str);



