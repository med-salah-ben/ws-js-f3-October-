// prompt("this is main.js file")
// ************ PRIMITIVE TYPES
// const name = "ramsey";

// let age = 21;

// var isStudent = true;

// let a = 5.5;
// let b = null;
// let z = NaN;
// let x = undefined;
// let y;
// console.log("a = " , a)
// console.log("a = " , a , "b = " ,b ,"z = " , z , "x = " , x , "y = " ,y)

// console.log("my name is " + name + " i'm " + age + " years old and i'm student " +isStudent  )
// console.log(
//   `my name is  ${name}  i'm  ${age}  years old and i'm student ${isStudent}`
// );
// Const
// const job = ""
//  name = "moad";

// console.log(name)
// LET
// age = 99;
// console.log(age);

//Var
// isStudent = "text123";
// console.log(isStudent)
// console.log(
//   `my name is  ${name}  i'm  ${age}  years old and i'm student ${isStudent}`
// );

// ************ ARRAYS - Store multiple values in a variable

// let numbers = [1, 5, 9, 2, 11, 555, 6692, 0];
// let arr = ["hi", "hello", "Marhaba"];
// let array = ["hi f3" , 123 , false , undefined , true , "hello world!"]
// console.table(array);
// ************ OBJECTS LITERALS
// let object = {
//     //key : value
//     name: "ramsey",
//     age :  age,
//     isStudent:isStudent,
//     hobbies: ["eating", "sleeping"]
// }
// console.table(object.hobbies)

// let arrayOfObjects = [
//   { name: "hazem", age: 25, isStudent: isStudent },
//   { name: "moad", age: 20, isStudent: isStudent },
//   { name: "bolbol", age: 28, isStudent: false },
// ];
// console.table(arrayOfObjects)

// function dummyFunc(){}

// // Check type
// console.log(typeof dummyFunc);

// console.log('je mappelle wtvr')

//------String Method
// let s = 'Hello World';

// let val;

// let arr = ["a" , "b" , "c" , "D"]

// console.log(arr.join(','))

// Get length
// val = s.length;
// console.log(val)
// String Index
// console.log(s[0]);

// Change case
// val = s.toUpperCase();
// console.log(val)
// val = s.toLowerCase();
// console.log(val)
// // Get sub string
// val = s.substring(0, 5);
// console.log(val)
// Split into array
// val = s.split('');
// console.log(val)
// val = val.join('-');
// console.log(val)
// console.log(s)
// console.log(val)

//--------Array Method
// const colors = ['black', 'white', 'red', 'blue'];
// console.log(colors)
//  colors.push("yellow");
// console.log(colors)
// colors.pop();
// console.log(colors)
// // colors.shift() ;
// // console.log(colors);
// colors.unshift("test");
// console.log(colors);

// colors[10] = "react";
// console.log(colors);

// console.log(Array.isArray(colors));

// console.log(colors.indexOf("red"));
// console.log(colors.includes('r'));

// const str = "hello from ws js";
// console.log(str.includes("from"));

//----------- Math - operation

// console.log(5+9);
// console.log(5+"9")
// console.log(5-"9")
// console.log(4*2);
// console.log("4"*2);
// console.log("4"*"2");
// console.log("4"/2);
// console.log("4"*"abc");

// let x = 5 ;
//-------------- ++X -------------------
// console.log("X = " , x)  //return 5
// console.log("++x : " , ++x ) // return 6
//--------------- X++ ---------------
// console.log("x++ : " , x++ ) //return 5
// console.log("X = " , x) // return 6

//---------- Object Literals ------------
// const draining = {
//   2016_05_15: "9000KM",
//   2016_09_20: "18000KM",
//   2017_03_5: "27000KM",
//   rest: [2018, 2019, 2020],
//   next_drain: {
//     2023_11_12: "100000KM",
//   },
// };

// const car = {
//   name: "KIA",
//   model: "SORENTO",
//   color: "black",
//   year: 2016,
//   isElectric: false,
//   draining: draining,
//   //   text : "hello Kia"
// };

// // const {name}= car;

// // console.log(name)
// // console.log(car.name)

// const text = "hello Kia";
// car.text = text;
// // car.test = draining;
// car.model = "RIO";
// car.draining.rest.unshift(2021)
// console.log("Car : ", car);

//------------ True OR False ---------------

// false, undefined, null, 0, "", NaN

// let test=0;

// console.log(test)
// console.log(Boolean(test))


//------------ Compare ---------------

// let x = 10 ;
// let y = "10";
// let j = true;
// // console.log(typeof(x))
// // console.log(x)
// // x = y ;
// // console.log(x)
// // console.log(typeof(x))
// // console.log(x = y )
// // console.log(y = x)

// // console.log(x === y)

// // console.log(!j)
// // console.log(x != y)
// console.log(x !== y)
//------------- I never Undrestood JS------------//

// console.log(NaN === NaN) // => false

// console.log([] *1 === 0) // => true
// console.log([] + [] === '') // => true
// console.log(false +1 ) => 1 // =>true 

// console.log(typeof NaN === 'number') // => true 
// console.log(NaN === NaN)

// console.log(typeof NaN === NaN) //=> false 
// console.log(typeof NaN === typeof NaN) //=> true 
// console.log(5 - - "5"); // => 10 
// console.log(5 + + "5"); // => 10 

//---------- Logical ---------------------//
// ********** X && Y
// Returns first value if falsy
// console.log( 1 && "" && 5  && 0 ) // =>  ""

// ********** X || Y
// Returns first value if truthy
// console.log( 0 || 5  || true) // => 5

//----------------- Loops -------------------//

// let test = 0;
// let array = [1 ,2 , 3 , 4];
// let index = 0 ;

// for (index; index < array.length ; index++) {
//     test = test + array[index]
//     console.log(test)
// }
//old i = 10 
//i = 12 
// let i = 88;
//       //condition
//       //  ||
// while (i <= 10) {
// console.log(`While Loop Number: ${i}`);// => 9 
// console.log(`I before inc = ${i}` ) // => 9
//  i = i+2;
// console.log(`I after inc = ${i}` ) // =>11
// }

//------------ Conditionals --------------------//
// **** Simple If/Else Statement
// const x ="10";

// if (x === 10) {
// console.log('x is 10');
// } else if (x > 10) {
// console.log('x is greater than 10');
// } else if(x < 10) {
// console.log('x is less than 10');
// }else{
//     alert('x is not number')
// }

// ***** Switch (/!\break)
// let color = 'red';

// switch (color) {
// default:
// console.log('color is neither red nor blue');
// break;
// case 'red':
// console.log('color is red');
// break;
// case 'blue':
// console.log('color is blue');
// break;

// }

// ***** Ternary operator / Shorthand if
// let color = 'yellow';
// let colorQualified = color === "red" ? "is red" : color === "yellow" ? "is yellow"  : "isn't red or yellow";
// console.log(`Color ${colorQualified}!`);


//----------- Functions -------------------------------//
// let x = 3 ;
// function greet(x) { return `Hello ${x}`; }

// console.log(greet("gomycoders"));

// Parameter = p
// Argement = a

// const add = function(pA,pB){
//     return pA+ pB
// }

// let aA = 8 ;
// let aB = 9 ;
// console.log(add(11 , 2))

// ARROW FUNCTIONS
const greet = name => { console.log(`Hello ${name}`); };

// const add = (a , b ) => {
//     return a + b
// }
// const add = (a,b) => a+b

// const add = y => y + y
// console.log(add(7,5))

greet('Adam');