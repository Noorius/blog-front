import React, {useEffect, useState} from "react";
import {faker} from "@faker-js/faker";
import {commentPost, likePost} from '../posts/postFunctions'
import CommentItem from "./comments/CommentItem";

function Wall_item({item, curr_user}){
    const [object, setObject] = useState(item)
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState("")

    async function like(){
        await likePost(object._id).then( (res) => {
            setObject(res.data)
        })
    }

    async function to_comment(){
        await commentPost(object._id, comment).then((res)=>{
            setComments(res.data.comments.map((comment) => (
                <CommentItem key={comment._id} comment={comment}/>
            )))
        })
    }

    useEffect(()=> {
        setComments(item.comments.map((comment) => (
            <CommentItem key={comment._id} comment={comment}/>
        )))
    },[])

    return(
        <div className='ui segment' style={{marginBottom: 20, padding: 20}}>
            <div className='ui feed' >
                <div className='event'>
                    <div className="label">
                        <img src={faker.image.avatar()}/>
                    </div>
                    <div className='content'>
                        <div className="summary">
                            <a className="user">
                                {object?.author.name} {object?.author.surname}
                            </a>
                            <div className="date">
                                {new Date(object.createdAt).toLocaleString()}
                            </div>
                        </div>
                        <span className='ui header'>{object.title}</span>
                        <div className="extra text">
                            {object.body}
                        </div>
                        <div className="extra images">
                            <img src={faker.image.image()} alt="avatar"/>
                        </div>
                        <div className="meta">
                            <a className="like">
                                <i className={`${object.liked.findIndex((it)=>it.email === curr_user?.email) !== -1 ? 'red' : 'grey'} like icon`}
                                   onClick={()=>like()}
                                /> {object.liked.length} Likes
                            </a>
                        </div>
                        <div className='ui comments'>
                            <h3 className='ui dividing header'>Comments</h3>
                            <form className='ui form field' onSubmit={(e)=>{
                                e.preventDefault()
                                to_comment();
                                setComment("")
                            }}>
                                <textarea rows='2'
                                          value={comment}
                                          onChange={(e)=>setComment(e.target.value)}/>
                                <input className='ui tiny green button' type='submit' value='Comment'/>
                            </form>
                            {comments}
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );

}

export default Wall_item;