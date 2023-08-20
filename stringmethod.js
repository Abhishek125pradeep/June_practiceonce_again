let text = ' my name is abhishek jvfld'
textlengh = text.length
console.log(textlengh);
a= text.slice(0-10)
console.log('a',a);

console.log(text.substring(6,9));

 var text2 = 'something anything else if'
  console.log(text2.substring(-5,6)); 
  console.log(text2.substring(5,-8)); 
   

 let text3 = 'to day is Hodiday work from home'
 console.log(text3.substr(2,7)); 
 
 var r= "pune replace by mumnbai  pune near pirpri punr near pune"
 var q=r.replace('pune','mumbai');
 console.log(q);

 var r2= 'ajay is going to school ajay is bathing ajay is triming'
 var q2= r2.replaceAll(/Ajay/ig,"abhishek");
 console.log(q2);

 var city='RKFERILGERLIGJERLIG'
 var e=city.toLowerCase();
 var h=city.toUpperCase();
 console.log(e);
 console.log(h);



 let up="JNFRJNGKJDVMFDLKJBM";
 let up1=up.toLowerCase();
 console.log(up1);

 let lp3="frdfgvtgrtgbhgfb";
 let lp=lp3.toUpperCase();
 console.log(lp);


 let name4= "   abhishe   ";
 let name5=name4.trim();
 console.log(name5);
 console.log(name4);
    

 var trim1= "   Ajit   ";
 var trim2=trim1.trimEnd();
 console.log(trim2);

let upper= "kfjlijf";
let upperr= upper.toUpperCase();
console.log(upperr);
 

var uper1= "IJJLJLIJLJL";
var uper2= uper1.toLowerCase();
console.log(uper2);




const char= "AbhishekNagrale";
console.log(char.charAt(5));



var dob= '12-5-1998';
console.log(dob.split("12"));

var abc= 23;
abc=String(abc)
console.log("value of abc is",abc);
console.log('typeof a',typeof(abc));
var xyz= 'hkuhku';
xyz=Boolean(xyz);
console.log("value of xyz is",xyz);
console.log('typeof xyz',typeof(xyz));