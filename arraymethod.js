var num= [ 20,25,56,85,65,45,32,74,95]
console.log(num.length);
let numstring = num.toString()
console.log(numstring);

let fruit = ['banana', 'apple', 'orange', 'kiwi'];
var fruits = fruit.pop()
console.log(fruits);
console.log(fruit);
  

//length
var  num2= [23,55,66,54,36,90,76,];
console.log(num2.length);
//string
var num3=num2.toString();
console.log(num3);
//pop
var color=['red','orange','blue','yellow'];
var color1=color.pop();
console.log(color1);
console.log(color);
//push
let cars=['i10','swift','duster','thar']
let cars1=cars.push('bmw');
console.log(cars1);

let shifteditom=cars.shift();
let unshift=cars.unshift('alto','vitarabreza');
console.log(unshift);
console.log(shifteditom);
console.log(cars);

// var b2= prompt();
// console.log(b2);
//indexof 
let fruits3= ['Apple','Grapes','banana','pineapple']
let indexofruits =fruits3.indexOf('banana');
console.log(indexofruits);
delete fruits3[indexofruits]
console.log(fruits3);




//concate
var froot= ['apple','loki','tomato','shefu'];
var froot1=froot.concat('..grapes','....pineapple');
console.log(froot1);


//join
let num5=[14,5,1998];
let num6=num5.join('-')
console.log(num6);

//slice
var n=[10,20,30,41,25,65,85]
console.log(n.slice(2,6));

//splice
var frot=['mango','banana','kiwi','apple']
frot.splice(1,1,'hhj','jjki');
console.log(frot);

console.log(frot.sort());
console.log(frot.reverse());