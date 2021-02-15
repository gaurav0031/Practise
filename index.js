// 1.Ways to print in Javascript
// console.log("hello world");
//alert("me");
// document.write("this is document Write");


//2.Javascript Console API
// console.log("hello world");
// console.warn("this is Warning");
// console.error("This is an error");

//3. Javscript Variables
// what are Variables? - Containers to store data values.
// var number1 = 34;
// var number2 = 16;
// console.log(number1 + number2);

//4. Data types in JavaScript
// Numbers 
// var num1 = 455;
// var num2 = 56.76;
//String
// var str1 = "This is String";
// var str2 = 'this is also String';
//Objects
// var marks = {
//     ravi:34,
//     Shubham:78,
//     Harry:99.997
// }
// console.log(marks);
//Booleans
var a = true;
var b = false;
//console.log(a,b);

//var und = undefined;
var und;
//console.log(und);

var n = null;
//console.log(n);
//Arrays
var arr = [1, 2, "bablu", 4, 5];
//console.log(arr);

//operators in JavScript
//Arithimetic Operator
var a = 100;
var b = 10;
// console.log("the value of a+b is " , a+b);
// console.log("the value of a-b is " , a-b);
// console.log("the value of a*b is " , a*b);
// console.log("the value of a/b is " , a/b);
//Assignment Operator
var c = b;
c += 2;
c -= 2;
c *= 2;
c /= 2;
console.log(c);
//Comparison Operator
var x = 34;
var y = 16;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x>y);
// console.log(x<y);

//Logical Operator
//Logical And
// console.log(true&&true);
// console.log(true&&false);
// console.log(false&&true);
// console.log(false&&false);
//logical Or
// console.log(true||true);
// console.log(true||false);
// console.log(false||true);
// console.log(false||false);

//Logical Not
// console.log(!false);
// console.log(!true);

//Function in JavaScript
// function avg(a,b){
//     c = (a+b)/2;
//     return c;
//}
//DRY = Do Not Repeat Yourself
// c1 = avg(4,6);
// c2 = avg(14,16);
// console.log(c1,c2);
//Conditional in JavaScript
/*var age = 40;
//Single if statement
if (age>18){
    console.log("you can drink water");
}
//if-else Statement
if (age>18){
    console.log("you can drink rasna water");
}
else{
    console.log("you cannot drink rasna water");
}
age = 21;
//if else Ladder
if(age>32){
    console.log("you are not a kid");
}
else if (age>26){
    console.log("bachhe nahi rahe");
}
else if (age>22){
    console.log("yes bachhe nahi rahe");
}
else if (age>18){
    console.log("18 bachhe rahe");
}
else{
    console.log("bachhe rahe");
}
console.log("End of Ladder");
*/

//Loops in JavaScript
// var arr = [1,2,3,4,5,6,7];
// console.log(arr);

// for(var i=0; i<arr.length;i++){
//     console.log(arr[i]);
// }
//For Loop
// arr.forEach(function(element){
//     console.log(element);
// })
//While Loop
// let j=0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++
// }
//do-while Loop
// do{
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length);

//Array Method
// let myArr = ["Fan", "Camera", 34, null, true];
//console.log(myArr.length);
// myArr.pop();
// myArr.push("harry");
//myArr.shift();
// const newLen = myArr.unshift("haary");
// console.log(newLen);
// console.log(myArr);

//String Method
// let myLovelyString = "Harry is a good boy good good";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("good"));
// console.log(myLovelyString.lastIndexOf("good"));
// console.log(myLovelyString.slice(0,4));
// d = myLovelyString.replace("Harry","Rohan");
// d =d.replace("good","bad");
// console.log(d,myLovelyString);

//Dates in JavaScript
let myDate = new Date();
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());












