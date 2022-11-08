import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {createUser, getUser} from './userController'

function SignUp(){
    const [error, setError] = useState('')
    const [user, setUser] = useState({email: "", password: "", name: "", surname: ""})
    const [avatar, setAvatar] = useState({})

    function register({email, password, name, surname}){
        setError('Registering... Wait')
        createUser({email, password, name, surname, avatar}).then(res => {
            window.localStorage.setItem('token', res.data.token);
            document.location.href = '../';
        }).catch((e)=>{
            setError(e.response.data.message)
        })
    }

    const handleChange = e => {
        setUser(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    }

    return(
        <div className='ui one column centered grid middle aligned' style={{height: 650}}>
            <div className='four wide column ui segment'>
                <form className="ui form"
                      encType="multipart/form-data"
                      onSubmit={(e)=>{
                          e.preventDefault();
                          register(user)
                      }
                 }>
                    <h3 className='ui dividing header'>Register</h3>
                    <div className="field">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Email" value={user.email}
                               onChange={handleChange}/>
                    </div>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={user.name}
                               onChange={handleChange}/>
                    </div>
                    <div className="field">
                        <label>Surname</label>
                        <input type="text" name="surname" placeholder="Surname" value={user.surname}
                               onChange={handleChange}/>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password" value={user.password}
                               onChange={handleChange}/>
                    </div>
                    <div className="field">
                        <label>Avatar</label>
                        <input type="file" name="avatar"
                               onChange={(e) => {
                                   setAvatar(new File(e.target.files[0]))
                               }}/>
                    </div>
                    <button className="ui blue button" type="submit">Register</button>
                </form>
                {error && <span style={{color: "red"}}>{error}</span>}
                <br/><hr/><br/>
                <Link to='/signin' className='ui green button'>Log In</Link> <span>Already have an account?</span>
            </div>
        </div>
    );
}

export default SignUp;