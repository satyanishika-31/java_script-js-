/*Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
*/
const marks = [78, 92, 35, 88, 40, 67];
/*
Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92*/
    let result1=marks.filter(emp=>emp>=40)
    console.log("filtering marks>=40",result1)
    let result2=marks.map(emp=>emp+5)
    console.log("adding greas marks",result2)
    let result3=marks.reduce((acc,emp)=>acc>emp?acc:emp)
    console.log("the greates element is ",result3)
    let result4=marks.find(emp=>emp<40)
    console.log("mark below 40",result4)
    let result5=marks.findIndex(emp=>emp==92)
    console.log("indes of marks",result5)