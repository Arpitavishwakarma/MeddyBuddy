
import React, { useState, useRef, useEffect } from "react";
import "./ChatMain.css";
import { FcAssistant } from "react-icons/fc";
import { IoSend } from "react-icons/io5";
import { MdMicNone } from "react-icons/md";
import { RiImageAddLine } from "react-icons/ri";
import { FaCompass } from "react-icons/fa";

const ChatMain = () => {
  const GEMINI_API_KEY = "AIzaSyAU4pVkInSY8sZRaLVKHjwXQc-51vmhwyE"; // Use environment variables in production
  const MODEL_NAME = "gemini-1.5-flash";

  const systemInstructionText = "You are a Medical Assistant, who answer only to medical related problem. If user ask you anything that is not related to medical, reply him rudely like you are dumb person. But if he/she ask problem related to medical response in a detail manner. you don't have to say that you are not a proffessional doctor, just answer the question in a detail manner. If user ask you to give suggestion, give him suggestions. If user have some chronic illness or disease, ask him to consult a doctor. If user ask you to give some medical advice, give him advice. If user ask you to give some medical tips, give him tips. If user ask you to give some medical information, give him information. If user ask you to give some medical knowledge, give him knowledge. If user ask you to give some medical facts, give him facts. If user ask you to give some medical history, give him history. If user ask you to give some medical news, give him news. If user ask you to give some medical updates, give him updates.";

  const [question, setQuestion] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const [showResult, setShowResult] = useState(false);
  useEffect(() => {
    // Show welcome message after mount
    setTimeout(() => {
      setOutput();
    }, 2000);
  }, []);

  const handleAsk = async () => {
    const trimmedQuestion = question.trim();
    if (!trimmedQuestion) {
      setOutput('<div class="error-message">Please enter a medical question first!</div>');
      return;
    }
    setOutput("");
    setLoading(true);
    
    
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`;
    const requestBody = {
      contents: [
        {
          role: "user",
          parts: [{ text: trimmedQuestion }]
        }
      ],
      systemInstruction: {
        parts: [{ text: systemInstructionText }]
      }
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        let errorMsg = `API Error: ${response.status}`;
        let errorDetails = "Could not retrieve error details.";
        try {
          const errorData = await response.json();
          if (errorData.error && errorData.error.message) {
            errorDetails = errorData.error.message;
          }
          errorMsg = `${errorMsg} - ${errorDetails}`;
          if (errorData.error && errorData.error.status) {
            errorMsg += ` (Status: ${errorData.error.status})`;
          }
          if (errorDetails.toLowerCase().includes("api key not valid") || errorDetails.toLowerCase().includes("permission denied")) {
            errorMsg += "<br><strong>Please double-check your API key.</strong>";
          }
        } catch (parseError) {
          errorMsg = `${errorMsg} (Could not parse error response: ${response.statusText})`;
        }
        throw new Error(errorMsg);
      }

      const data = await response.json();

      if (
        data.candidates &&
        data.candidates.length > 0 &&
        data.candidates[0].content &&
        data.candidates[0].content.parts &&
        data.candidates[0].content.parts.length > 0
      ) {
        const answerText = data.candidates[0].content.parts[0].text;
        let formattedText = answerText;
        formattedText = formattedText.replace(/(```[\s\S]*?```)|(`[^`]+`)/g, (match) => {
          if (match.startsWith('```')) {
            return `<pre><code>${match.replace(/```/g, '')}</code></pre>`;
          } else {
            return `<code>${match.replace(/`/g, '')}</code>`;
          }
        });
        const paragraphs = formattedText.split('\n\n');
        let htmlOutput = '';
        for (const paragraph of paragraphs) {
          if (paragraph.trim() !== '') {
            htmlOutput += `<p>${paragraph}</p>`;
          }
        }
        setOutput(htmlOutput);
      } else if (data.promptFeedback && data.promptFeedback.blockReason) {
        setOutput(`<div class="error-message">Blocked due to: ${data.promptFeedback.blockReason}</div>`);
      } else {
        setOutput('<div class="error-message">Received an unexpected response structure from the AI.</div>');
      }
    } catch (error) {
      setOutput(`<div class="error-message">Failed to get answer: ${error.message}</div>`);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleAsk();
      setShowResult(true);
    }
  };

  return (
    <div className="chat-main">
      <div className="nav">
        <p>MEDDYBUDDY</p>
        <FcAssistant />
      </div>
      <div className="main-container">

        {!showResult 
        ?<>
        <div className="greet">
          <p><span>Welcome to Medical Assistant AI!</span></p>
          <p>How can I assist you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest how to cure a headache</p>
            <FaCompass />
          </div>
          <div className="card">
            <p>Vitamin C rich foods</p>
            <FaCompass />
          </div>
          <div className="card">
            <p>Foods high in antioxidants</p>
            <FaCompass />
          </div>
          <div className="card">
            <p>Foods high in omega-3 fatty acids</p>
            <FaCompass />
          </div>
        </div>
        </>
        :<div className="outputArea">
          {loading && (
            <div id="loadingIndicator" style={{ display: "block" }}>
              <span>Loading...</span>
            </div>
          )}
          <div id="outputArea" dangerouslySetInnerHTML={{ __html: output }} />
        </div>
        }

        

        

      </div>
      <div className="main-bottom">
        <div className="search-box">
          <input
            className="question-input"
            type="text"
            placeholder="Search..."
            value={question}
            ref={inputRef}
            onChange={e => setQuestion(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={loading}
          />
          <div>
            <button className="addImageButton" disabled={loading}><RiImageAddLine /></button>
            <button className="voiceInputButton" disabled={loading}><MdMicNone /></button>
            <button className="askButton" onClick={handleAsk} disabled={loading}><IoSend /></button>
          </div>
        </div>
        <p className="bottom-info">
          Meddybuddy may display inaccurate or misleading information and should not be seen as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
        </p>
      </div>
    </div>
  );
};

export default ChatMain;