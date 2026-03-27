/*ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
*/
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
/*
Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"
   */
let result1=students.filter(obj=>obj.marks>=40)
//console.log(result1)
let result2=students.map(obj=>{
  if(obj.marks>90){
    obj.grade='A'
  }
  else if(obj.marks>=75){
    obj.grade="B"
  }
  else if(obj.marks>=60){
    obj.grade="C"
  }
  else{
    obj.grade="D"
  }
   return obj
})
console.log(students)
let result3=students.reduce((acc,obj)=>acc+obj.marks,0)
console.log("the average is",result3/students.length)
let result4=students.find(obj=>obj.marks=92)
console.log("details of the student who scored 92 marks ",result4)
let result5=students.findIndex(obj=>obj.name=="Kiran")
console.log("the index of kiran is ",result5)