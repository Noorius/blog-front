import React from "react";
import {Link} from "react-router-dom";
import {deletePost, getPosts} from './postFunctions'

class Wall extends React.Component{
    constructor(props) {
        super(props);
        this.state = {posts: []};
        this.getPosts();
    }


    async getPosts(){
        const res = await getPosts()
        const new_posts = res.data.map((item) => (
            <tr key={item._id}>
                <td data-label="ID">{item._id}</td>
                <td data-label="Title">{item.title}</td>
                <td data-label="Body">{item.body}</td>
                <td data-label="Author">{item.author}</td>
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
        return(
            <div>
                <h1 className="ui header">Blog Admin</h1>

                <div className='ui relaxed divided list'>
                    {this.state.posts}
                </div>
            </div>
        );
    }


}

export default Wall;