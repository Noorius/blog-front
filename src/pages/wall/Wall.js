import React from "react";
import {getPosts} from '../posts/postFunctions'
import Wall_item from "./Wall_item";
import {getUser} from "../users/userController";

class Wall extends React.Component{
    constructor(props) {
        super(props);
        this.state = {posts: []};
        this.getPosts();
        let curr_user;
    }


    async getPosts(){
        const res = await getPosts()
        const new_posts = res.data.map((item) => (
                <Wall_item key={item._id} item={item} curr_user={this.curr_user?.data}/>
        ));
        this.setState({posts: new_posts})
    }

    async getCurrUser(){
        this.curr_user = await getUser();
    }

    componentDidMount() {
        this.getCurrUser()
        this.getPosts();
    }

    render() {
        return(
            <div>
                <h2>Recent posts</h2>
                <div>
                    {this.state.posts}
                </div>
            </div>
        );
    }


}

export default Wall;