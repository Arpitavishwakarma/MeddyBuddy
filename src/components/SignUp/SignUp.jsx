import React from "react";
import "./SignUp.css"


function SignUp(){
    return(
        <>
        <div id="signup" 
        onSubmit={(e)=>{
            alert("Login Successfully")
        }}>
            
            <form action="">
                <span id="signuptitle">Sign Up Page</span>
                <div className="list">
                    <label htmlFor="name">UserName</label>
                    <input type="text" id="name" required/>
                </div>
                <div className="list">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" required/>
                </div>
                <div className="list">
                    <label htmlFor="pass1">Password</label>
                    <input type="password" id="pass1" required/>
                </div>
                <div className="list">
                    <label htmlFor="conpass1">Confirm Password</label>
                    <input type="password" id="conpass1" required/>
                </div>
                <button id="signupbtn">Sign Up</button>
            </form>
        </div>
        
        </>
    );
}
export default SignUp