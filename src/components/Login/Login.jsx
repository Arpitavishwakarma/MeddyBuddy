import React from "react";
import "./Login.css"


function Login(){
    return(
        <>
        <div id="login" 
        onSubmit={(e)=>{
            alert("Login Successfully")
        }}>
            
            <form action="">
                <span id="logintitle">Login Page</span>
                <div className="list">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" required/>
                </div>
                <div className="list">
                    <label htmlFor="pass">Password</label>
                    <input type="password" id="pass" required/>
                </div>
                <button id="loginbtn">Login</button>
            </form>
            
        </div>
        
        </>
    );
}
export default Login