import React from "react";
import {faker} from "@faker-js/faker";

function CommentItem({comment, to_reply}){

    return(
        <div className="comment">
            <a className="avatar">
                <img src={faker.image.nature()}/>
            </a>
            <div className="content">
                <a className="author">{comment.user.name} {comment.user.surname}</a>
                <div className="metadata">
                    <span className="date">{new Date(comment.date).toLocaleString()}</span>
                </div>
                <div className="text">
                    {comment.body}
                </div>
                <div className="actions">
                    <a className="reply" onClick={e=>{
                        to_reply(comment.user.surname + " " + comment.user.name + ", ")
                    }}>Reply</a>
                </div>
            </div>
        </div>
    )
}

export default CommentItem