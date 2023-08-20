//length
var len=[3987398,48465,true,78327327]
console.log(len.length);
var tostring=len.toString();
console.log(tostring);

//pop always remove last element in aaray or always return deleted value

let pop=['allu',"potato","abhishek",'chillies']
let pop2=pop.pop(2);
console.log(pop2);
console.log(pop);

//push

var fruits= ['apple','grapes','banana','mango']
fruits.push('kiwi','zebra','dragon frut')
console.log(fruits);


//shift

let  fruits3= ['apple','grapes','banana','mango'];
let fal=fruits3.shift()
console.log(fruits3);
console.log(fal);

//unshiftvidyut
var  fruits4= ['apple','grapes','banana','mango'];
console.log(fruits4.unshift('kaju','amounds'));
console.log(fruits4);

//delete
let  fruits5= ['apple','grapes','banana','mango'];
var indexofarray=  fruits5.indexOf('banana')
console.log(indexofarray);
delete fruits5[indexofarray];
console.log(fruits5);

//concatinate
var fruits7= ['apple','grapes','banana','mango'];
let  fruits6= ['.....banana','....mango'];
let fruits9= fruits7.concat(fruits6)
console.log(fruits9);
console.log(fruits7.join("$"));
//join
var dob=[12,5,1998]
console.log(dob.join("-"));
//slice
let color=['red','blue','yellow','pinnk','purple']
console.log(color.slice(1,4));
console.log(color.slice(1,3));

//splice
let n=[45,85,5,55,44,2,33]
n.splice(2,0,'red','yellow');
console.log(n);

var name1=['abhishek','shahrukh','salman','shahid']
name1.splice(2,2,'john','ajay')
console.log(name1);
name1.splice(1,1,'vidyut')
console.log(name1);
