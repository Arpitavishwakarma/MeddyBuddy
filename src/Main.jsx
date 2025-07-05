import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client"
import App from "./App";
import "./main.css"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import Chat from "./components/Chat/Chat";
import ChatMain from "./components/Chat/ChatMain";

const router = createBrowserRouter(createRoutesFromElements(
    
    <Route path='/' element={<App/>}>
        <Route path="" element={<Home/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="SignUp" element={<SignUp/>}/>
        <Route path="chat" element={<Chat />}>
          <Route index element={<ChatMain />} />  // Default right panel
        </Route>
    </Route>

))


ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router = {router}/>
    </StrictMode>
);