/*let arr=[1,2,3]
const prompt = require('prompt-sync')();
let a= prompt("Enter a number")
let n=Number.parseInt(a)
arr.push(n)
console.log(arr)*/
/*let arr=[1,2,3]
const prompt = require('prompt-sync')();
let n;
do{
  let a= prompt("Enter a number")
  n=Number.parseInt(a)
  arr.push(n)
  console.log(arr)
}
while(n!=0)*/
/*let arr=[1,10,20,34,45,66,90]

console.log(arr.filter((a)=> {
             return a%10==0
           }))*/
/*let arr=[1,2,3,4,5]
console.log(arr.map((a)=>{
  return a*a;
}))*/
const prompt = require('prompt-sync')();
let a= prompt("Enter a number")
let n=Number.parseInt(a)
let arr=[]
for (i=1;i<=n;i++){
  arr.push(i)
}
console.log(arr)
let factorial=arr.reduce((h1,h2)=>{
  return h1*h2
})
console.log("factorial of array is = ",factorial)