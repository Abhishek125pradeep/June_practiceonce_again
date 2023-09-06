let cars=['i10','swift','renault','BMW',"Thar"]
let newcars=[]
for(i=0;i<cars.length;i++){
    newcars.push(cars[i]);
}
console.log('newcars',newcars);


var colors=['blue','orNGE','white','yellow'];
var newcolor=[];
for(index=0;index<colors.length;index++){
     newcolor.push(colors[index])
}
console.log("newcolors",newcolor);

var newcars1=[];
cars.forEach(ele => {
    newcars1.push(ele)
})
console.log('newcars1',newcars1);

let newcolor1=[];
colors.forEach(ele => {
    newcolor1.push(ele)
})
console.log("newcolor1",newcolor1);


var vegi=[];
colors.forEach(ele => {
    vegi.push(ele)
})
console.log('vegi',vegi);


var colors3=[];
colors.forEach(ele => {
    colors3.push(ele)
})
console.log('colors3',colors3);

var newgadi=[];
cars.forEach(ele => {
    newgadi.push(ele)
})
console.log('newgadi',newgadi);


let gadinew=[];
cars.forEach(ele =>{
    gadinew.push(ele)
})
console.log('gadinew',gadinew);


let vegitable1=['tomato','potato','onion','spinach']
let vegitable2=[];
for(i=0;i<vegitable1.length;i++){
    vegitable2.push(vegitable1[i])
}
// console.log('vegitable',vegitable2);
// var vegitable3=[];
// vegitable1.forEach(ele =>{
//     vegitable3.push(ele)

('vegitable3',vegitable2);

//spread operators
let newcars3=[...cars];
console.log("newcars",newcars);
var vegi4=[...vegitable1];
console.log('vegi4',vegi4);
let colors4=[...colors]
console.log('colors4',colors4);

let car=['i10','swift','Vitarabreza','i20','bmw'];
var newcars5=[]
for(i=0;i<cars.length;i++){
   newcars5.push(car[i])
}
console.log(newcars5);

var luxuarycars=[]
car.forEach(ele =>{
    luxuarycars.push(ele)
})
console.log("luxuarycars",luxuarycars);
let vegi8=[];
vegitable1.forEach(ele =>{
   vegi8.push(ele)
})
console.log( "vegi8", vegi8);
var vegi9=[];
vegitable1.forEach(ele =>{
    vegi9.push(ele)
} )
console.log(vegi9);

var colors1=['blue','yellow','sky','green'];
var color2=[];
for(i=0;i<colors1.length;i++){
    color2.push(colors1[i])
}
console.log('color',color2);
let colors5=[];
colors1.forEach(ele =>{
    colors5 .push(ele)
})
console.log('colors5',colors5);
let color6=[...colors1]
console.log(color6);

var fruits8=['apple','orange','banana','chiku'];
var fruits9=[];
fruits8.forEach(ele =>{
    fruits9.push(ele)
})
console.log(fruits9);


for(i=0;i<cars.length;i++){
    newcars5.delete
}



//map
let employee= [
  {name:"abhi",age:25},
  {name:"raju",age:33},
  {name:"ajit",age:54},
  {name:"sharukh",age:44}  
]
let employeenames=[];
 employee.map(employeeData=>{
    employeenames.push() 
})
console.log('employeenames',employeenames);

var employeeage= [];
employee.map(emplaoyeeages=>{
    employeeage.push( emplaoyeeages.age)
})
console.log("employeeage",employeeage);


// function syntax ()
function test(){
    let employee= [
        {name:"abhi",age:25},
        {name:"raju",age:33},
        {name:"ajit",age:54},
        {name:"sharukh",age:44}  
      ]
      let employeenames=[];
       employee.map(employeeData=>{
          employeenames.push(employeeData) })
          console.log('employeenames',employeenames);     
}
function cascading(){
    test()
}
function addition(){
    result=30+50;
    console.log(result);
}

 result = function addition1(){
    return result=20+60;
}
 


 function add1(num1,num2){
    return result=num1+num2;
   
}
add1(100,55)





















let a1=20;
let b1=30;
let c1=50;


function calculate(a1,b1){
return a1+b1
}
v=calculate(66,85)
console.log(v);
a=25
rslt=function Mul(){
    return a*a
}
console.log(rslt);



num4=[40,50,90,55,66,43]
num6=[];
num4.forEach(item=>{
    if(item!=55){
    num6.push(item)}
})
console.log('num6',num6);


//shalow copy using spread operator
let name5=['JAY','AJAY','ATUL','sumit'];
var againname=[...name5];
 name5[2]='rajesh';
againname=[...name5]
console.log('againname', againname);


var char=['ksa','dafdsaf','lal',"sing"]
var harr=[...char];
char[1]='gooolu';
// harr=[...char];
console.log(harr);
//shallow copy
let numberrr=[25,11,33,24,98,45,66];
numberrr[3]=77;
var numberrr1=[...numberrr];

console.log(numberrr1);
console.log(numberrr1);
//shallowcopy

var shallow=['badam','Akhrod','Pista','Manuka'];

var shallow1=shallow
shallow1[1]='Makka';

console.log(shallow);
console.log(shallow1);



var empdata=[
    {name:"Shital", age:45},
    {name:"kajal",age:65},
    {name:"ashutosh",age:26},
    {name:"jay",age:45}

]
var catchdata=empdata.map(   objemp =>{
    return objemp.name
}
    )
    console.log("catchdata",catchdata);
var empage=empdata.map(empobj =>{
    return empobj.age
})
console.log(empage);
    var studntdata=[{name:"ajay",class:5},
                   {name:"shahrukh",class:12},
                   {name:"salman",class:8},
                   {name:"akshay",class:12}
 ]
 var student=studntdata.map( ojstu =>{
    return ojstu.class
 })
 console.log(student);
 
 var studentname=studntdata.map(objstname =>{
    return objstname.name
 })
 console.log(studentname);

 
var vegi=[{name: "abhishek",age:54},
           {name:"Hitesh",age:66},
        {name:"jayesh", age:23}]
  var lot=vegi.map(route =>{
    return route.name
  })     
  console.log(lot); 











  let found=[{name:'ajayu',age:78},
{name:"raj",age:14},
{name:"kat",age:55}]


var man=[];
found.map(some =>{
    man.push(some.name)
})
console.log(man);
//delet
var del=['white','green','yellow','blue','orange']
var led=del.indexOf("yellow");
console.log(led);
delete del[led] 
console.log(del);