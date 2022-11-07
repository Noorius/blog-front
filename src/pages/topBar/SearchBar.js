import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

function SearchBar(){
    const [text, setText] = useState('');
    const navigate = useNavigate()
    // constructor(props) {
    //     super();
    //     this.onFormSubmit.bind(this); // Then I dont need to use arrow functions underneath
    // }

    return (
            <form name='form' onSubmit={() => {
                navigate('search')
            }}>
                <div className="ui small icon input">
                    <input type='text'
                           value = {text}
                           placeholder="Search..."
                           name = 'q'
                           onChange={(event) => { setText(event.target.value) } }/>
                    <i className="search icon link" onClick={(e) => {
                        navigate('search')
                        document.forms['form'].submit()
                    }}/>
                </div>
            </form>
    );
}

export default SearchBar;