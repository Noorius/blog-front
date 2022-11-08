import React from 'react';
import SearchBar from "../SearchBar";
import {Link} from "react-router-dom";
import {logoutUser} from "../../users/userController";
import './TopBar.css'

function TopBar(){

    return (
        <div className="box">
                <div><h2><Link to={''}>Blog</Link></h2></div>
                <div><SearchBar/></div>
                <div><Link to={'/posts'}><h2>Account</h2></Link></div>
                <div>
                    <button className="mini ui red button" onClick={(e)=>{logoutUser()}}>Log Out</button>
                </div>
        </div>
    );
}

export default TopBar;