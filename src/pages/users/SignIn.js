import React, {useState} from "react";
import {Link} from "react-router-dom";
import SignForm from "./SignForm";
import {loginUser, getUser} from './userController'

function SignIn(){
    const [error, setError] = useState('')

    function login({email, password}){
            loginUser({email,password}).then(res => {
                window.localStorage.setItem('token', res.data.token);
                document.location.href = '../';
                //window.location.replace = '/'
            }).catch (e => {
                setError(e.response.data.message)
            })
    }

    return(
        <div className='ui one column centered grid middle aligned' style={{height: 650}}>
            <div className='four wide column ui segment'>
                <SignForm onSubmit={login} label="Log In"/>
                {error && <span style={{color: "red"}}>{error}</span>}
                <br/><hr/><br/>
                <Link to='/signup' className='ui green button'>Register</Link> <span>Don't have an account?</span>
            </div>
        </div>
    );
}

export default SignIn;