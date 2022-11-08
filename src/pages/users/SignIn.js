import React, {useState} from "react";
import {Link} from "react-router-dom";
import {loginUser} from './userController'
import './Sign.css'

function SignIn(){
    const [error, setError] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function login({email, password}){
            setError('Logging in... Wait')
            loginUser({email,password}).then(res => {
                window.localStorage.setItem('token', res.data.token);
                document.location.href = '../';
                //window.location.replace = '/'
            }).catch (e => {
                setError(e.response.data.message)
            })
    }

    return(
        <div className='parent'>
            <div className='child'>
                <form className="ui form"
                      onSubmit={(e)=>{
                          e.preventDefault();
                          login({email, password})
                      }
                      }>
                    <h3 className='ui dividing header'>Login</h3>
                    <div className="field">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Email" value={email}
                               onChange={(e)=>{
                                   setEmail(e.target.value);
                               }}/>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password" value={password}
                               onChange={
                                   (e)=>setPassword(e.target.value)
                               }/>
                    </div>
                    <button className="ui blue button" type="submit">Log In</button>
                </form>
                {error && <span style={{color: "red"}}>{error}</span>}
                <br/><hr/><br/>
                <Link to='/signup' className='ui green button'>Register</Link> <span>Don't have an account?</span>
            </div>
        </div>
    );
}

export default SignIn;