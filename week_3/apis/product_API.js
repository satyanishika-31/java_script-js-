import exp from 'express'
export const productApp=exp.Router()
let product=[]
   productApp.get('/product',(req,res)=>{
       res.json({message:"the products are",product})
       
    })
    //read all product by brand

    productApp.post('/product',(req,res)=>{

        const newpro=req.body
        product.push(newpro)
        res.json({message:"prodect added"})

        
    })
    //update a product
   productApp.put('/product/:id',(req,res)=>{
      //get modified user from the client
         let ide= Number(req.params.id);

      let modifieduser=req.body;
      //get index of existing user in users array
      let index=product.findIndex(userobj=>userobj.id===ide)
      //update user with index
      if(index===-1){
         return res.json({message:"product  not fount"})
      }
      product.splice(index,1,modifieduser)
       //send res
      res.json({message:"product updated"})

   
   })
    //delete a product by id
     productApp.delete('/product/:id',(req,res)=>{
            let idofpro=Number(req.params.id)
            let indexpro=product.findIndex(indexobj=>indexobj.id===idofpro)
            if(indexpro===-1){
                return res.json({message:"the product is not found"})
            }
            product.splice(indexpro,1)
            res.json({message:"deleted"})

        
    })
