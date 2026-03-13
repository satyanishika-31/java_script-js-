/*       i. validator.js - Input validation
                     // TODO: Export these validation functions
                     
                     // 1. Validate task title (not empty, min 3 chars)
                     function validateTitle(title) {
                       // Your code here
                     }
                     
                     // 2. Validate priority (must be: low, medium, high)
                     function validatePriority(priority) {
                       // Your code here
                     }
                     
                     // 3. Validate due date (must be future date)
                     function validateDueDate(date) {
                       // Your code here
                     }
*/
function validateTitle(title) {
    // Your code here
    if (title == " ") {
        return "title not valid"
    }
    else if (title.length() < 3) {
        return "title not valid"
    }
    else {
        return true;
    }

}
function validatePriority(priority) {
    // Your code here
    if (priority == 'high' || priority == "medium" || priority == "low") {
        return true

    }
}
function validateDueDate(date) {
    // Your code here
    let dueDate=new Date('2024-10-20')
    let today=new Date()
    if(dueDate>today)
         return "invalid";
    return true
}
export{validateDueDate,validatePriority,validateTitle}