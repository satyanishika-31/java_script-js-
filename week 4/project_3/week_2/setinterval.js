
/*2.OTP Countdown Simulator (Console App)
------------------------------------
        
        Simulate OTP sending flow in Node.js:
        
        Show “OTP Sent Successfully”
        
        Start 10-second countdown
        
        Allow resend only after countdown ends*/
        i=10;

        console.log("OTP Sent Successfully")
       let p= setInterval(()=>{
            console.log(i--)
            if(i==0){

                clearInterval(p)
                console.log("RE send otp")
            }
        },1000)
    

