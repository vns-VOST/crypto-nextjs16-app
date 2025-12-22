let age1=22
if(age1>10 && age1<20){
console.log("your age lies between 10 and 20")}
else{
  console.log("your age doesn't lies between 10 and 20")
}
//q no 2
const prompt = require('prompt-sync')();
let age = prompt("enter any letter from a,b,c,d");
switch (age){
    case'a':
      console.log("you selected a")
      break;
    case'b':
      console.log("you selected b")
      break;
    case'c':
      console.log('you selected c')
      break;
    case'd':
      console.log("you selected d")
      break;
    default:
      console.log('you selected wrong letter')
      break;
}
//q no 3

let num1=prompt("enter any number");
if(num1 % 2==0 || num1 % 3==0){
  console.log("number is divisible by 2 or 3")
}
else{
  console.log("number is not divisible by 2 or 3")
}
//q no 4

let num=prompt("enter any number");
if(num % 2==0 && num % 3==0){
  console.log("number is divisible by 2 and 3")
}
else{
  console.log("number is not divisible by 2 and 3")
}

//q no 5

let age2=prompt('enter your age');
console.log(age2>18?"you can drive":"you cannot drive")




