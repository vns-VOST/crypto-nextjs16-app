// 1st question
// let arr = [1, 2, 3, 4, 5, 6, 7, 83]
// let a = prompt("Enter a number")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)

// 2nd Question
// let arr = [1, 2, 3, 4, 5, 6, 7, 83]
// let a;
// do {
//   a = prompt("Enter a number")
//   a = Number.parseInt(a)
//   arr.push(a)
// } while (a != 0);
// console.log(arr)

// 3rd Question
// let arr = [1, 2, 30, 4, 50, 6, 7, 83, 670]
// let n = arr.filter((x)=>{
//   return x%10 == 0
// })
// console.log(n)

// 4th question
// let arr = [1, 2, 30, 4, 50, 6, 7, 83, 670]
// let n = arr.map((x)=>{
//   return x*x
// })
// console.log(n)

// 5th Question
let arr = [1, 2, 3, 4, 5]
let n = arr.reduce((x1, x2) => {
  return x1 * x2
})
console.log(n)