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
console.log('vegitable',vegitable2);
var vegitable3=[];
vegitable1.forEach(ele =>{
    vegitable3.push(ele)
})
console.log('vegitable3',vegitable3);

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
