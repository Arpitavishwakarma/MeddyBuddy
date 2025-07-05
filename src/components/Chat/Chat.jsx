// components/Chat/Chat.js
import React,{useState} from "react";
import "./Chat.css";
import { Outlet } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";



function Chat() {

  const [extended, setExtended] = useState(false);

  return (
        <div className="chat-container">
        <div className="side">
            <div className="top">
                <button onClick={()=>setExtended(prev=>!prev)} className="menu"><IoMdMenu/></button>
                <div className="new-chat">
                    <button><FiPlus/></button>
                    {extended?<p>New Chat</p>:null}
                </div>
                {extended?
                <div className="recent">
                    <p className="recent-title">Recent</p>
                    <div className="recent-entry">
                        <button><IoChatbubbleOutline /></button>
                        <p>Vitamin C rich foods ...</p>
                    </div>
                </div>
                :null
                }
                
            </div>
            <div className="low">
                <div className="settings">
                    <button><IoMdSettings /></button>
                    {extended?<p>Settings</p>:null}
                </div>
            </div>

            
        </div>
        <div className="chat-main">
            <Outlet />
        </div>
        </div>
    );
}

export default Chat;