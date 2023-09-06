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


let word= "i love Indiasomething";
let sameword= word.length;
console.log("sameword",sameword);
var cut=word.slice(2,6)
console.log(cut);
var set=word.slice(-9,0)
console.log(set);
let nut=word.substring(2,12);
console.log(nut);

let rep="i love mumbai but go  i watch Mumbai but isaw Mumbai";
let per=rep.replaceAll(/mumbai/gi,'puna');
console.log(per);
let er=rep.replace(/mumbai/gi,'puna');
console.log(er);

var fn='ABhishek';
var Ln='Nagrale';
var concat=fn+" "+Ln;
console.log(concat);
var Fullname= fn.concat(' ',Ln,'enginner')
console.log(Fullname);


let trm="  abhishek nagrlae  ";
var mtm=trm.trimEnd()
console.log(mtm);
console.log(trm);
 
var chart="abhsihhje";
console.log(chart.charAt(4));
//split

let spl='12-5-1998';
console.log(spl.split('-'));


//search strings

var  ani='catddddog';
console.log(ani.indexOf('o'));
console.log(ani.lastIndexOf('d'));
  

let natch= "indfia is th best of best";
console.log(natch.search("best"));//it will return it first match indeex


var muth= "how are your how nice you";
console.log(muth.match('how'));
console.log(muth.match(/how/g));
var drop=" please god  please help for one time please help me"
console.log(drop.match(/ase/g));
var drop=" Please god  Please help for one time Please help me"
console.log(drop.includes("please"));


