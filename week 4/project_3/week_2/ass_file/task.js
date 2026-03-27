import { validateDueDate, validatePriority, validateTitle } from "./validator.js"
/*       ii. task.js - Task operations
                    // TODO: Import validator functions
                    // import { ... } from './validator.js';
                    
                    
                    // 1. Add new task
                    function addTask(title, priority, dueDate) {
                        // Validate using imported functions
                        // If valid, add to tasks array
                        // Return success/error message
                        }
                        
                        // 2. Get all tasks
                        function getAllTasks() {
                            // Return all tasks
                            }
                            
                            // 3. Mark task as complete
                            function completeTask(taskId) {
                                // Find task and mark as complete
                                }
                                
                                // Export functions
                                */

const tasks = [];
function addTask(title, priority, dueDate) {
 

     tasks.push(title, priority, dueDate)
}
function getAllTasks() {

    return tasks;           
}

export { addTask, getAllTasks }