let no=[10,200,360,40,5,45,22,41]
var no1=[]
no.forEach(element => {
    if(no!=45){
    no1.push(element)
}});
console.log(no1);

//part copy
var no3=[10,20,202,12,45,63,22,47];
let  [a,b,c,d,...e]=no3
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

let Empdetails={
    name:'Abhishek',
    jobrole:"project engineer",
    sallary:40000,
    location:"banglore"
}
var cardtails1={
    carname:'Swift',
    price:450000,
    color:"silver",
    Engine:true
}
d={...Empdetails,...cardtails1};
console.log(d);

var word="MAHARASHTRAMUMBAI";
var originalword=word.toLowerCase();
console.log("originalword",originalword);
var finalstring=''
for(let i=0;i<originalword.length;i++){
    var char=originalword[i];
    if(!finalstring.includes(char)){
        finalstring += char;
    }
}
console.log("finalstring",finalstring);


// var firstname='MUMBAIMAHARASHTRA';
// var result=firstname.includes('');
// console.log(result);




let name2='AttitudeAjay';
let repeatname=name2.toLowerCase();
let bringname='';
for(index=0;index<repeatname.length;index++){
    let charector=bringname[index];
    if(!bringname.includes(charector)){
        bringname += charector
    }
}
console.log("bringname",bringname);

function test(){
    f="test.../.....";
}
function test2(){
    this.test()
}
console.log(this.test2());


var writename="AAKilsrgjHHffLL";
var samename=writename.toLowerCase();
console.log(samename);
var addname="";
for(let i=0;i<this.samename.length;i++){
    let code=samename[i];
    if(!addname.includes(code)){
        addname += code;
    }
}
console.log('addname',addname);


var Wrongname='MaHarashtraMajha';
var Wrightname=Wrongname.toLowerCase();
console.log(Wrightname);

let catchname="";
for(let i=0;i<this.Wrightname.length;i++){
    var catt=Wrightname[i];
    if(!catchname.includes(catt)){
catchname += catt;
    }
}
console.log(catchname);

let pathchname='jayBhimJayshivrai';
let dropname= pathchname.toLowerCase();
console.log(dropname);
fontname="";
for(i=0;i<dropname.length;i++){
    var not = dropname[i];
    if(!fontname.includes(not)){
        fontname+=not
    }
}
console.log(fontname);


var warnnae='kkalloppdll'
var wontname=warnnae.toLowerCase();
console.log(wontname);
var witchname="";
for(i=0;i<wontname.length;i++){
    var rouname=wontname[i];
    if(!witchname.includes(rouname)){
    witchname+=rouname;}
}
console.log(witchname);


