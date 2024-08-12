var a=10;
console.log(a);
pr="pravin";
console.log(pr)
function mufun(n,m){
    return n*m;
}
let m=mufun(2,4);
console.log(m)
if(m>=0){
    console.log("m is positive")
}

for(var i=0;i<m;i++){
    console.log(i);
}
switch(m){
    case 90<=100:
        console.log("executed");
        break;
    case 80<=90:
        console.log("B+ grade");
        break;
    default:
        console.log("mark range from 50-80");
        break;
}
m=m+80;
if(m>90)
{
    console.log("A+ grade");
}
else if(m<90 && m>80){
    console.log("A grade");
}
else{
    console.log("fail");
}
function add(){
    let a=parseInt(document.getElementById("a").value)
    let b=parseInt(document.getElementById("b").value)
    let c=document.getElementById('out')
    c.value=a+b;
}
function sub(){
    let a=parseInt(document.getElementById("a").value)
    let b=parseInt(document.getElementById("b").value)
    let c=document.getElementById('out')
    c.value=a-b;
}
function mult(){
    let a=parseInt(document.getElementById("a").value)
    let b=parseInt(document.getElementById("b").value)
    let c=document.getElementById('out')
    c.value=a*b;
}
function div(){
    let a=parseInt(document.getElementById("a").value)
    let b=parseInt(document.getElementById("b").value)
    let c=document.getElementById('out')
    c.value=a/b;
}

const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
let currentIndex = 0;

setInterval(() => {
	document.body.style.backgroundColor = colors[currentIndex];
	currentIndex = (currentIndex + 1) % colors.length;
}, 1000); 


