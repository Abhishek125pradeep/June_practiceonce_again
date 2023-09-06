//if,elseif,else,switch
a=55;
b=50
if(a < b){
    console.log('a is smaller than b');
}
else if( a=b){
console.log('a is equal to b');
}
else if(a>b){
console.log('a is greater than b');
}


a < b ? console.log("good"):console.log("bad");

let color = 'black';
switch(color){
    case'black':
    console.log('correct color');
   break;
    case 'blue':
        console.log('color is blue');
       
        case'yellow':
        console.log('color is yellow');
         
         case'white':
         console.log('color is white');
           
           
            
}


let marks=100;
switch(marks){
    case 100:
        console.log("Passed");
      
    case 50:
    console.log("fail");
    
     case 75:
     console.log("also fail");
 
     case 85:
     console.log("he is fail");

     
        default:
            console.log("no one passsed");
             

}

var num = 85;
switch (num) {
    case num == 10:
        console.log('10 number');
        break;
    case num <= 45:
        console.log(' 45number');
    case num > 78:
        console.log("78 number");
        break;
    case 95:
        console.log("correct number");
        break;
    default:
        console.log('nothing');

}


//nested if;
let x=15;
var y=25;

if( x<=15){
    if(y<=25){
        console.log('y is print');
    }
}

let num1 = 10;
do {
 num1++;
 console.log('print');

} while (num1 < 15)



//if else
var l=30;
var o=30;
// if(l>o){
//     console.log("condition is true");
// }
// else{
//     console.log("Condition is false");
// }
//if we want to check more than two conditions

if (l > o) {
    console.log("l is greater than o");
}
else if (l == o) {// always use equality operators
    console.log("l is equal to o");
}
else if (l < o) {
    console.log("l less than o");
}
else {
    console.log("nothing");
}
//switch case break
var car = "Murserdies"
switch (car) {
    case ("BMW"):
        console.log("car is no BMW");
        break;
    case ("indigo"):
        console.log("car is not indigo");
        break;
    case ("Murserdies"):
        console.log("yes car is Murserdies");
        break;
}



























