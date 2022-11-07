import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {deletePost, getPostsByUser} from './postFunctions'

class Posts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {posts: []};
        this.getPosts();
    }


    async getPosts(){
        const res = await getPostsByUser()

        const new_posts = res.data.map((item) => (
            <tr key={item._id}>
                <td data-label="Title">{item.title}</td>
                <td data-label="Body">{item.body}</td>
                <td data-label="#ofliked">{item.liked.length}</td>
                <td data-label="#ofcomments">{item.comments.length}</td>
                <td data-label="">
                    <button className='ui negative button' onClick={async (e) =>{
                        deletePost(item._id);
                        this.getPosts();
                    }}>Delete</button>
                    <br/> <br/>
                    <Link to={`/posts/${item._id}`} className='ui blue button'>Edit</Link>
                </td>
            </tr>
        ));
        this.setState({posts: new_posts})
    }

    componentDidMount() {
        this.getPosts();
    }

    render() {

        if(this.state.posts.length === 0){
            return(
                <div>
                    <h1 className="ui header">My Posts</h1>
                    <Link to='create' className='ui blue button'>Create Post</Link>
                    <h1>No Posts</h1>
                </div>
            );
        }

        return(
            <div>
                <h1 className="ui header">My Posts</h1>

                <Link to='create' className='ui blue button'>Create Post</Link>

                <table className="ui celled table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Body</th>
                        <th># of likes</th>
                        <th># of comments</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.posts}
                    </tbody>
                </table>
            </div>
        );
    }


}

export default Posts;