//create user schma
//import schma then create object
// define username{
// here it takes the properites like css 
//}
//string -js data type
//String -mongoose daatype
//generarte userModel
import { Schema ,model,Types} from "mongoose";
//cart schma   {}
const cartschma =new Schema({
    product:{
        type:Types.ObjectId,
        ref:"product "
    },
    count:{
        type:Number,
        default:1
    }
})

const userSchma = new Schema({
    username: {
        type: String,
        required: [true, "this field required"],
        minLength:[4,"min length 4 characters"],
        
        
    },
    password:{
        type: String,
        required: [true, "this field required"],

    },
    email:{
        type:String,
        required:[true,"this field is required"],
        unique:[true,"Email already existed"]
    },
    age:{
        type:Number
    } ,   
    cart:[cartschma]

},{
    versionKey:false,

})

 
//generate usermodal

export const UserModel =model("user",userSchma)

