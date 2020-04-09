import React from 'react';
import cs from './MyPosts.module.css';
import Post from './Post/Post';
import MyPostsForm from './MyPostsForm';

const MyPosts = ({profile, addPost}) => {

    let postsElements = profile.posts.map( post => <Post key={post.id} id={post.id} post={post.post} likes={post.likes} />)

    return <div className={cs.myPosts}>
        <h3>My posts</h3>
        <div>
            New post
        </div>
        <MyPostsForm onSubmit={(formData) => addPost(formData)} />
        <div className={cs.posts}>
            { postsElements }
        </div>
    </div>
}

export default MyPosts;