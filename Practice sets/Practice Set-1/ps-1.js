let a=String
a="hello"
let b=Number
b=5
console.log(a+b)
console.log(typeof a)
console.log(typeof(a+b))


const detail ={
  name: "vinayak",
  phone: "9876543210",
  email: "ztejd@example.com"
}
detail['phone']= "9876543211"
detail['email']= "abcd@example.com"
console.log(detail)

detail['address']= "xyz"
console.log(detail)

const dict={
  appreciate: "recognize the full worth of",
  ataraxia: "a state of freedom from emotional disturbance and anxiety",
  yakka: "work, especially hard work"
}
console.log(dict.yakka)
console.log(dict['ataraxia'])