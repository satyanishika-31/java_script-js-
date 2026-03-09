const temperatures = [32, 35, 28, 40, 38, 30, 42];
/*

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28
*/
//!filter
let result=temperatures.filter(temperature=>temperature>35)
console.log(result)
let result1=temperatures.map(temperature=>temperature*(1.8)+32)
console.log("converting celseius into Fahrenheit",result1)
let avg_val=temperatures.reduce((acc,temperature)=>acc+temperature)
console.log("the average of all tempratures",avg_val/temperatures.length)
let tmp=temperatures.find(temperature=>temperature>40)
console.log("first temperature above 40 is",tmp)
let finding=temperatures.findIndex(temperature=>temperature=28)