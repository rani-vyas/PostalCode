import React, { useState } from "react";

export function ZipPostalCode () {
   const [zipcode,setZipcode] = useState('');
   const [error,setError] = useState('');
   const [message,setMessage] = useState('');
    
    const handlechangeCode = (event) =>{
    setZipcode(event.target.value);
   }
   const handleSubmitCode = (event) =>{
  event.preventDefault();
    if(zipcode.length !== 5){
    setError("Please Enter a valid ZIP Code! (Only 5 digits) ")
   }
   else{
    setError('')
}

if(zipcode.length === 5){
    console.log('You Entered Valid ZipCode' , zipcode)
        setMessage('You Entered Valid ZipCode' , zipcode)
}
else{
    setMessage('')
}

}
    return(
        <>
        <div>
            <form onSubmit={handleSubmitCode} id="form-id" >
                <input 
                id="input-id"
                type="number" 
                placeholder="Enter Your ZIP Code" 
                onChange={handlechangeCode}
                value={zipcode}
                
                />
                {error && <p style={{color:'red'}}>{error}</p>}
                {message && <p style={{color:"green"}}>{message}</p>}
               {/* <p id="para-id" style={{color:'Red'}}></p>
                <p id="para1-id" style={{color:'Blue'}}></p>*/}
            <button type="Submit" >Submit</button>
            </form>
        </div>
        </>
    )
            }