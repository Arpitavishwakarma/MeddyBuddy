import React from "react";
import "./Home.css"
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
const nurseImage = new URL('../../assets/nurse.png', import.meta.url).href;

function Home(){
    return(
        <>
        <div id="home">
            <div className="hleft">
                <div className="hleft1">
                    <h1>AI Chat Assistant</h1>
                    <h1>Instant Answers,</h1>
                    <h1>Anytime.</h1>
                </div>
                <div className="hleft2">
                    <p>Welcome to our AI-Powered Chat Assistant, where AI will</p>
                    <p>answer medical related question instantly anytime.</p>
                    <p>Discover how our AI-driven platform can revolutionalize</p>
                    <p>your healthcare experience.</p>
                </div>
                <div className="hleft3">
                    <Link to={"/Chat"}><button><MessageCircle size={23} color="#ffffff" strokeWidth={2.25} />Chat Assistant</button></Link>
                </div>
            </div>
            <div className="hright">
                <img src={nurseImage} alt="Nurse" />
            </div>
        </div>
        </>
    )
}
export default Home