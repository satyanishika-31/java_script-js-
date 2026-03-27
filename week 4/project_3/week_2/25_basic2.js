/*Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
*/
const courses = ["javascript", "react", "node", "mongodb", "express"];

/*
Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"
*/
let result1=courses.filter(element=>element.length>5)
console.log("length greater than 5 ",result1)
let result2=courses.map(element=>element.toUpperCase())
console.log("converted to upper case",result2)
let result3=courses.reduce((acc,element)=>acc+' |'+element)
console.log(result3)
let result4=courses.find(element=>element=="react")
console.log(result4)
let result5=courses.findIndex(element=>element=="node")
console.log(result5)