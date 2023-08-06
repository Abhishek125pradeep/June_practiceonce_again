//Arithmatic Operators +,=,*%,
let num= 25+15
console.log(num);
let num1= 25-100
console.log(num1);


var a= 25;
console.log(++a);
console.log(a++);
console.log(a);

var b = 100;
console.log(++b);
console.log(b++);

var c = 149;
console.log(c++);
console.log(c);
console.log(c++);
console.log(++c);

y= 15;
console.log(--y);
console.log(y--);
console.log(y);
//addition assignment operators

a=90;
a+=80;
console.log(a);



a1=150;
a1+=150
console.log(a1);

n=75;
n %=2;
console.log(n);




h = 66;
h%=2;
console.log(h);

h = 100;
h/=2;
console.log(h);

//arithmatic operator

a=45;
b=45;
c=a+b;
console.log(c);

s1=75
s2=2
d=s1*s2
console.log(d);

//increasmnet decreament operator

a3=99;
console.log(++a3);//it will be add first and then return it
console.log(a3++);//it will be return as it is value then increment
console.log(a3);

b3= 150;
console.log(b3--);
console.log(b3);
console.log(--b3);


//Comparison Operators
//Equal to Operators
let firstNumber =11;
let secondNumber =12;
let compare = firstNumber == secondNumber;
console.log(compare); 

firstNumber =11;
secondNumber =11;
let compare1 = firstNumber == secondNumber;
console.log(compare1); 


//notEqualto Operators
let thirdNumber =33;
let fourthNumber =33;
result = thirdNumber != fourthNumber;
console.log(result);

//Strictly Equal to
const fifth= 75;
const sixth='75';
let equal = fifth === sixth;
console.log(equal);
 

//logial and operatioin
let logic =   15;
let logic1 = 10;
let logo= logic && logic1;
console.log(logo);



age=17;
if (age >= 18){
    console.log("Your age is more than 18 ");
    console.log("You can Eligible For Vote");
}
else(
    console.log("Your age is less than 18 you can not eligible for vote")
)
const marks =20
if (marks >= 90){
    console.log('Excelllent Progress');
    if(marks <=20){
        console.log('Increased in your study');
    }
}
else if(marks >= 80){
    console.log("good Scored");
}
else if(marks >= 70){
    console.log("average Scored");
}
else if(marks >= 60){
    console.log("Low Marks");
}
else(console.log('Failed'))
//tarnary operators
let tmarks=55; 
const scored=tmarks >=75 ? 'PASSED' : "FAILED";
console.log(scored);


let a4= 75;
let b4= 52;
a4+=b4;
console.log(a4);

let n7 = 75;
let m7 = 25;
m7%=n7;
console.log(m7);

 let p1 = 45;
let n3 = 125;
console.log(p1 == n3);

let value =65;
let value2 ='65';
console.log(value == value2);



var dig = 45;
var dig2 = '45';
console.log(dig === dig2);


const add= 'abhi';
const add1= "abh";
console.log(add === add1);

let kal =17;
let lak =32;
console.log('>',kal > lak);

var mom = 45;
var mom1 = 48;
console.log('>',mom1>mom);

const fun=66;
const fun1=33;
console.log('<',fun<fun1);

const fun2=66;
const fun3=33;
console.log('<',fun3<fun2);

var man = 45;
var nam= 45;
console.log(man != nam);


let jok = 456;
let koj = '456';
console.log(jok !== koj);

//ternary operator
var data=100;

data >=200 ? console.log("correct value") : console.log('Value is Wrong');


let val = 80;
val >= 90 ? console.log('studnet pass') : console.log('student fail');












var num7=700;
num7 <= 750 ? console.log('infuence') : console.log('ininfluence');