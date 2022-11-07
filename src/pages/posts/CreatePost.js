import axios from "axios";
import {useNavigate} from "react-router-dom";
import PostForm from "./PostForm";
import {createPost} from "./postFunctions";

function CreatePost(){
    const navigate = useNavigate();

    return(
        <div>
            <button className='ui button' onClick={()=>navigate(-1)}>Back</button>
            <br/><br/>
            <PostForm onSubmit={createPost} label="Create"/>
        </div>
    );
}

export default CreatePost;