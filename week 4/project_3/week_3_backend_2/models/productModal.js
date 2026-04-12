/*
//product document structure
1.productId(required)
2.productName(required)
price(requried,min price 10000 and max price 50000)
brand(required)
*/
import { Schema,model } from "mongoose";
const productSchema=new Schema({
	productId:{
		type:String,
		required:[true,"this field is required"],
		unique:[true,"productId already exists"],
	},
	productName:{
		type:String,
		required:[true,"this field is required"],
	},
	price:{
		type:Number,
		required:[true,"this field is required"],
		min:[10000,"min price is 10000"],
		max:[50000,"max price is 50000"],
	},
	brand:{
		type:String,
		required:[true,"this field is required"],
		unique:[true,"brand already exists"],
	},
	
})
//generate product model
export const ProductModel=model("product",productSchema)

