//creating http server
import exp from 'express'
import { userApp } from './apis/user_API.js';
import { productApp } from './apis/product_API.js';
const app = exp();

// use body  body psrser miidleware
app.use(exp.json())//boddy passing middle ware {this convert the json into java }
//forward req ro user api if the path start with user-api
app.use('/user-api',userApp)
//forward req ro product api if the path start with  product-api
// create the custom middle ware 
function middleware(req,res,next){
   //res.json({message:"this is ffrom  user defined middle ware"})
   console.log("middle ware")
   next()
}
console.log("hi")
function middleware1(req,res,next){
   //res.json({message:"this is ffrom  user defined middle ware1"})
   console.log("middle ware1")
   
   next()
}
app.use(middleware)
app.use(middleware1)

app.use('/product-api',productApp)
// set a port number
const port = 8088;
//used to listen tothe http port number
app.listen(port, () => console.log(`server listening to port ${port}...`));

//create API(rest APT - representational state transfor )(http://localhost:8088/users)
//replace test date with data base
//rout to handle get request of the clint
   //create product API with Below operations
   //create new product({productId,name,brand,price})
   //read all products
//   mongodb-no sql ,docmuntation orented database
