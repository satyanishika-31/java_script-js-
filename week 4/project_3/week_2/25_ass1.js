/*ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.
Test Data : 
*/
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
/*
Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard"
    */
let products=cart.filter(pobj=>pobj.inStock==true)
console.log("instock products",products)
let products2=cart.map(pobj=>pobj.name+" " +" " +pobj.price*pobj.quantity)
console.log("name and the price",products2)
let products3=cart.reduce((acc,pobj)=>acc+pobj.price*pobj.quantity,0)
console.log("total grand ",products3)
let products4=cart.find(pobj=>pobj.name=='Mouse')
console.log("the details of Mouse",products4)
let products5=cart.findIndex(pobj=>pobj.name=="Keyboard")
console.log("position of keybord",products5)