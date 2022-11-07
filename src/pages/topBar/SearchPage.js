import React from "react";
import {getPostsBySearch} from '../posts/postFunctions'
import Wall_item from "../wall/Wall_item";

class SearchPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {posts: []};
        this.getPosts();
    }

    async getPosts(){
        const text =  new URLSearchParams(window.location.search).get('q')
        const res = await getPostsBySearch(text)
        const new_posts = res.data.map((item) => (
            <Wall_item key={item._id} item={item}/>
        ));
        this.setState({posts: new_posts})
    }

    componentDidMount() {
        this.getPosts();
    }

    render() {
        return(
            <div>
                <h2>Search</h2>
                <div className='ui feed'>
                    {this.state.posts}
                </div>
            </div>
        );
    }


}

export default SearchPage;