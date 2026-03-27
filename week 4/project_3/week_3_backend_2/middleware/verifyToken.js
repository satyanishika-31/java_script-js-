import jwt from 'jsonwebtoken'
const{verify}=jwt

export function  verifyToken(req,res,next){
    const token =req.cookies?.token

    if(!token){
        return res.status(401).json({message:"plz login"})
    }
   try{

       const decodedToken = verify(token,'abcdef')
       console.log(decodedToken)
       req.user = decodedToken
       next()
   }catch(err){
    console.log(err)
       return res.status(401).json({message:"secion excerpired plz relogin to continue"})
   }
}//to access cookies proterity we nead to use cookey passer middleware. otherwise request.cookies is un defined
