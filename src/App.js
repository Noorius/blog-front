/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect} from "react";
import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom";
import Posts from "./pages/posts/Posts";
import EditPost from "./pages/posts/EditPost";
import CreatePost from "./pages/posts/CreatePost";
import SignUp from "./pages/users/SignUp";
import SignIn from "./pages/users/SignIn";
import Wall from "./pages/wall/Wall";
import TopBar from "./pages/topBar/TopBar/TopBar";
import SearchPage from "./pages/topBar/SearchPage";


function App(){


    if(window.localStorage.getItem('token') === null){
        return (
            <BrowserRouter>
                <div>
                    <Routes >
                        <Route path='signup' element={<SignUp/>}/>
                        <Route path='signin' element={<SignIn/>}/>
                        <Route path='*' element={<Navigate to='/signin'/>} />
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }

    return(
        <BrowserRouter>
            <div className="ui container">
                <TopBar/>
                <Routes>
                    <Route path="/" element={<Wall />} />
                    <Route path="*" element={<Wall/>}/>
                    <Route path="/search" element={<SearchPage/>}/>
                    <Route path="/posts">
                        <Route index element={<Posts />} />
                        <Route path=":id" element={<EditPost/>} />
                        <Route path="create" element={<CreatePost/>}/>
                        {/* <Route path="new" element={<NewPost />} /> */}
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );

}

export default App;


