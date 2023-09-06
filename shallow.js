//shallow copy
colors=['pink','grey','orange','yellow','blue'];
color2=colors;
color2[2]='Brown';
console.log(color2);
console.log(colors);
//deep copy
cars=['i10','swift','mini cup','duster','BMW'];
cars1=[...cars];
cars1[1]='Murserdies';
console.log('cars1',cars1);
console.log('cars1',cars);
//shallow copy of object
var cardtails1={
    carname:'Swift',
    price:450000,
    color:"silver",
    Engine:true
}
var cardetails2= cardtails1;
console.log("cardtails1",cardtails1);
console.log("cardtails2",cardetails2);
cardetails2.price=123000;
console.log(cardtails1);
console.log(cardetails2);


let Empdetails={
    name:'Abhishek',
    jobrole:"project engineer",
    sallary:40000,
    location:"banglore"
}
var Empdetails1=Empdetails;
console.log("Empdetails",Empdetails);
console.log("Empdetails1",Empdetails1);
Empdetails1.jobrole="system engineer";
console.log("Empdetails",Empdetails);
console.log("Empdetails1",Empdetails1);

let Empdetails3={
    name:'Abhishek',
    jobrole:"project engineer",
    sallary:40000,
    location:"banglore"}
var Empdetails4={...Empdetails3}
    console.log('Empdetails3',Empdetails3);
    console.log('Empdetails4',Empdetails4);
    Empdetails4.sallary=850000;
    console.log('Empdetails3',Empdetails3);
    console.log('Empdetails4',Empdetails4);
   
d=JSON.stringify(Empdetails3);
let studentdat='{"name":"abhishek","class":"10th","section":"D","rollno":"25"}'  
// let parsedatta=JSON.parse(Empdetails3)
// console.log(parsedatta);
// console.log(parsedatta.name);
d=JSON.parse(d);
console.log(d);
console.log(d.name);


//shallow copy


var catch5=['match','ratch','latch',"oatch"];
var put=catch5;
let put = "hatch"
