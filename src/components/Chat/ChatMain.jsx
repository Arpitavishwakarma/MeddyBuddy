import React from "react";
import "./ChatMain.css";
import { FcAssistant } from "react-icons/fc";
import { FaCompass } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { MdMicNone } from "react-icons/md";
import { RiImageAddLine } from "react-icons/ri";

const ChatMain = () => {
  return (
    <div className="chat-main">
        <div className="nav">
          <p>MEDDYBUDDY</p>
          <FcAssistant />
        </div>
        <div className="main-container">
          <div className="greet">
            <p><span>Hello, Dev?</span></p>
            <p>How can I assist you today?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Give me immediate cure for my headache</p>
              <FaCompass />
            </div>
            <div className="card">
              <p>Foods to eat when i am not feeling well</p>
              <FaCompass />
            </div>
            <div className="card">
              <p>Best yoga practices for relaxation</p>
              <FaCompass />
            </div>
            <div className="card">
              <p>Best exercises to relieve stress</p>
              <FaCompass />
            </div>
          </div>
          <div className="main-bottom">
            <div className="search-box">
              <input type="text" placeholder="Search..."/>
              <div>
                <button><RiImageAddLine /></button>
                <button><MdMicNone /></button>
                <button><IoSend /></button>
              </div>
            </div>
            <p className="bottom-info">
              Meddybuddy may display inaccurate or misleading information and should not be seen as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </p>
          </div>
        </div>
    </div>
  );
}
export default ChatMain;