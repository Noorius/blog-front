import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

function PostForm({onSubmit, label, object, _id}){
    const [title, setTitle] = useState(object?.title);
    const [body, setBody] = useState(object?.body);
    const navigate = useNavigate()

    return(
        <div>
            <form className="ui form"
                  onSubmit={async (e)=>{
                      e.preventDefault();
                      await onSubmit({title, body, _id})
                      navigate(-1);
                  }
                }>
                <div className="field">
                    <label>Title</label>
                    <input type="text" name="title" placeholder="Title" value={title || ""}
                    onChange={(e)=>{
                        setTitle(e.target.value);
                    }}/>
                </div>
                <div className="field">
                    <label>Body</label>
                    <input type="text" name="body" placeholder="Body" value={body || ""}
                    onChange={
                        (e)=>setBody(e.target.value)
                    }/>
                </div>
                <button className="ui blue button" type="submit">{label}</button>
            </form>
        </div>
    );
}

export default PostForm;