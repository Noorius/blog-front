import React, {useState} from "react";

function SignForm({onSubmit, label}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <form className="ui form"
              onSubmit={(e)=>{
                  e.preventDefault();
                  onSubmit({email, password})
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
            <button className="ui blue button" type="submit">{label}</button>
        </form>
    );
}

export default SignForm;