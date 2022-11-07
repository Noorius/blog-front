import client from "../../client";

export async function createPost ({title,body}){
    await client.post(`/posts/`,
        {
            "title": title,
            "body": body,
        })

}

export async function editPost({title, body, _id}){
    await client.patch(`/posts/${_id}`,
        {
            "title": title,
            "body": body
        })
}

export async function getById({id}){
    console.log(id)
    return await client.get(`/posts/${id}`)
}

export async function deletePost(id){
    if(window.confirm('Are you sure to delete?')) {
        await client.delete(`/posts/${id}`);
    }
}

export async function getPosts() {
    return await client.get(`/posts`)
}

export async function getPostsByUser() {
    return await client.get(`/posts/user`)
}

export async function getPostsBySearch(text) {
    return await client.get(`/posts/search/${text}`)
}

export async function likePost(_id){
    return await client.patch(`/posts/${_id}/like`)
}

export async function commentPost(_id, body){
    return await client.patch(`/posts/${_id}/comment`,{
        body: body
    })
}




