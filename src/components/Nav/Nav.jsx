import React ,{useState} from "react";
import "./Nav.css"
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
const logoimg = new URL('../../assets/logo.svg', import.meta.url).href;

function Nav(){

    let [visible , setvisible] = useState(false)
    

    return(
        <>
        {visible?<div className="sidebar">
                <Link to={"/Login"}><div className="ham1">Login</div></Link>
                <Link to={"/SignUp"}><div className="ham1">Sign Up</div></Link>
                <div className="ham1">Help Center</div>
            </div>:<div></div>}
        <div id="nav">
            <Link to={""}><div className="nav1">
                <img className="logoimg" src={logoimg}></img>
                <h2>MEDDYBUDDY</h2>
            </div></Link>
            <div className="nav2">
                <Link to={""}><button id="btn1">HOME</button></Link>
                <Link to={"/Chat"}><button id="btn1">CHAT</button></Link>
                <button id="btn1">ABOUT</button>
            </div>
            <div className="nav3">
                <button id="btn2" onClick={()=>{
                setvisible(prev=>!prev)
            }}>MENU <Menu size={36} color="#48466d" strokeWidth={2.25} /></button>
            </div>
        </div>
        </>
    )
}
export default Nav