import exp from 'express'
import {hash,compare} from 'bcryptjs'
import {UserModel} from '../models/UserModal.js'
import {verifyToken} from '../middleware/verifyToken.js'
import jwt from 'jsonwebtoken'
const {sign}=jwt//destructoring
export const userApp=exp.Router()

//middle ware 
// user llogin
userApp.post('/auth',async(req,res)=>{
	// getting crud operation from the client
	const {email,password}=req.body
	//verify email
	let user=await UserModel.findOne({email:email})
	if(user===null){
		return res.status(400).json({message:"invalid email"})
	}
	// compare passwored
	let result=await compare(password,user.password)
	if(result===false){
		return res.status(400).json({messsage:"invald paassword"})

	}
    const signedToken=sign({email:user.email},process.env.SECRITE_kEY,{expiresIn:"1hr"})
	//send token back
	res.cookie("token",signedToken,{
		httpOnly:true,
		sameSite:"lax",
		secure:false
	})
	res.status(200).json({message:"login sucess",payload:user})

})
//create new user
userApp.post("/users",async(req,res)=>{
        //get new user obj from req
        const newUser=req.body
        //hash the passwword(bcriptjs)
        const hashedpassword= await hash(newUser.password,10)        //replace plain password with hashed password
        newUser.password=hashedpassword        //create new user document
        const newUserDocument=new UserModel(newUser)
        //save
        const result=await newUserDocument.save()
        console.log("result",result)
        //saved resous
        res.status(201).json({message:"user created"})//201 success
   
})

//read all users
userApp.get("/users",verifyToken,async(req,res)=>{
	//request .user
    
    let userslist=await UserModel.find()
    res.status(200).json({message:"sucess",payload:userslist})
})
//get user by email
userApp.get("/user",verifyToken,async(req,res) => {
   //read user email from req
   const emailOfUser=req.user?.email
   // console.log(emailOfUser)
    //find user by id
   // const userObj=await UserModel.findOne({_id:uid})
   // use only to find by id :
   const userObj=await UserModel.findOne({email:emailOfUser}).populate("cart.product")
   // if user not found
   if(!userObj)
    return res.status(404).json({message:"User not found"})
    //send res
    res.status(200).json({message:"user",payload:userObj})
})

userApp.put("/users/:id",verifyToken,async(req,res)=>{
    //get modified user from req
    const modifiedUser=req.body
    const uid= req.params.id
	if(modifiedUser.password){
		const hashedpassword=await hash(modifiedUser.password)
		modifiedUser.password=hashedpassword
	}
    const updatedUser=await UserModel.findByIdAndUpdate(uid,{$set:{...modifiedUser}},{new:true,runValidators:true})
    res.status(200).json({message:"user updater",payload:updatedUser})
})
//delete by id
userApp.delete('/users/:id',verifyToken,async(req,res)=>{
	//read id from req
	const uid=req.params.id
	//find user by id and delete
	const userObj= await UserModel.findByIdAndDelete(uid)
	//if user not found
	if(!userObj){
		return res.status(404).json({message:"user not found"})
	}
	//send res
	res.status(200).json({message:"user deleted"})
})
//adding into the crt
// userApp.put("/cart/product-id/:pid",verifyToken,async(req,res) => {
//     //get product id from url param
//     let productId=req.params.pid
//     //get current user details
//     const emailOfUser=req.user?.email


//     //get user from db
//    // const user=await UserModel.findOne({email:emailOfUser})
//     //if user ivalid
//     // if(!user)
//     //     return res.status(404).json({message:"User not found"})
//     //add product to cart
//     let result=await UserModel.findOneAndUpdate({email:emailOfUser},{$push:{cart:{product:productId}}})
//     if(!result)
//         return res.status(404).json({message:"User not found"})
//     res.status(200).json({message:"Product added to cart"})
// })
//app.use(verifytoken)-->every req
//userAPP.get(path,verifyTOken,req-handdler)
userApp.put("/cart/product-id/:pid",verifyToken,async(req,res) => {
    //get product id from url param
    let productId=req.params.pid
    //get current user details
    const emailOfUser=req.user?.email
	//add product to the cart
	//check if pproduct exist
    let checkObj=UserModel.findById(productId)
	if(checkObj==null){
	    cart.count+=1
		return await UserModel.findOneAndUpdate({email:emailOfUser},{$push:{cart:{product:productId}}})

	}

		

    //get user from db
   // const user=await UserModel.findOne({email:emailOfUser})
    //if user ivalid
    // if(!user)
    //     return res.status(404).json({message:"User not found"})
    //add product to cart
    if(!result)
        return res.status(404).json({message:"User not found"})
    res.status(200).json({message:"Product added to cart"})
})