//create mini express applications 
import exp from 'express'
export const userApp=exp.Router()

let users=[]
userApp.get('/users', (req, res) => {
   //send responce to client 
    res.json({ message:"all users",paylode:users })

})
 userApp.get('/users/:id',(req,res)=>{
      //get user if  from url paramas
      let idofurl=Number(req.params.id)
      //find user
      let user=users.find(userobj=>userobj.id==idofurl)
      //if user not found
      if(user===undefined){
         return res.json({message:"user not found"})
      }
      //send res
      res.json({message:"a user",payload:user})
   })


//rout to handle post request of the clint 
userApp.post('/users', (req, res) => {

    const newuser=req.body
    users.push(newuser)
    res.json({message:"user created"})

})
//rout to handle get request of the clint
   userApp.put('/users/:id',(req,res)=>{
      //get modified user from the client
      let modifieduser=req.body;
      //get index of existing user in users array
      let index=users.findIndex(userobj=>userobj.id===modifieduser.id)
      //update user with index
      if(index===-1){
         return res.json({message:"user not fount"})
      }
      users.splice(index,1,modifieduser)
       //send res
      res.json({message:"user updated"})

   
   })
//rout to handle get request of the clint 
// app.delete()
userApp.delete('/users/:id', (req, res) => {
    //get id of the user from the url paramater 
    let idofurl=Number(req.params.id)  //it returens an object
    //find index of user 
    let index=users.findIndex(userObj=>userObj.id===idofurl)
    //delete user by index
    if(index===-1){
        return res.json({message:"user not found to delete"})

    }
    users.splice(index,1)
    res.json({message:"user deleted"})
    //send responce

})
