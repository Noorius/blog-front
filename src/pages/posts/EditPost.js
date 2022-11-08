import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import PostForm from "./PostForm";
import {editPost, getById} from "./postFunctions";

function EditPost(){
    const navigate = useNavigate()
    const params = useParams()
    const [object, setObject] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getById(params.id)
            .then((res) => {
                setObject(res.data);
                setLoading(false);
            })
    },[params.id]);

    if(loading) {
        return (
            <div className='ui text active loader'>Loading</div>
        )
    }

    return(
        <div>
            <button className='ui button' onClick={()=>navigate(-1)}>Back</button>
            <br/><br/>
            <PostForm onSubmit={editPost} label="Edit" object={object} _id={params.id}/>
        </div>
    );
}

export default EditPost;