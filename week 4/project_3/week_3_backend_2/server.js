//create http server..
import exp from 'express'
import {connect} from 'mongoose'
import { userApp } from './APIs/UserAPI.js'
import { productApp } from './APIs/productAPI.js'
import { config } from 'dotenv'
import cookieParser from 'cookie-parser'
config();//process.env.port.env.DB_URL

const app=exp()
//set a port number
app.use(exp.json())
//add cookie passer middleware
app.use(cookieParser())

//connect to db server.
app.use("/user-api",userApp)
app.use("/product-api",productApp)
const port = process.env.port||400
async function connectDB(){
	try{
		await connect(process.env.DB_URL)
		console.log('connected to db server..')
		

		//assign port to http server
app.listen(port,()=>console.log(`server listening to port${port}..`))
	}catch(err){
		console.log('error connecting to db server..',err)
	}
}
connectDB()
//error handling middleware
app.use((err, req, res, next) => {
	console.log(err.name, err.message)

	if (err.name === "ValidationError") {
		return res.status(400).json({ message: "error occured", error: err.message })
	}

	if (err.name === "CastError") {
		return res.status(400).json({ message: "error occured", error: err.message })
	}

	//server error
	res.status(500).json({ message: "error occured", error: "server side error" })
})

