import React from 'react';
import SearchBar from "./SearchBar";
import {Link} from "react-router-dom";
import {logoutUser} from "../users/userController";


function TopBar(){

    return (
        <div className="ui block header">
            <div className="ui grid">
                <div className="five wide column"><h2><Link to={''}>Blog</Link></h2></div>
                <div className="seven wide column"><SearchBar/></div>
                <div className="two wide column"><h2><Link to={'/posts'}>Account</Link></h2></div>
                <div className="two wide column">
                    <button className="mini ui red basic button" onClick={(e)=>{logoutUser()}}>Log Out</button>
                </div>
            </div>
        </div>
    );
}

export default TopBar;