console.log("i will send 10thsound tomorrow")
let futurepro=true
const promiseobj=new Promise((full_filled,rejected)=>{
    setTimeout(() => {
        if(futurepro==true)
            full_filled("promise fulfilled")
        else
            rejected("promise rejects")
    }, 5000);
})

promiseobj
.then((message)=>{
    console.log("message is then :",message)
})
.catch((erromessage)=>{
    console.log("message is then :",erromessage)

})