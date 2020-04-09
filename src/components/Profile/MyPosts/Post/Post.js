import React from 'react';
import cs from './Post.module.css';

const Post = (props) => {
    return (
        <div className={cs.item}>
            <div className={cs.postText}>
                <img src='https://www.navily.com/images/default_boat.png' alt={''}/>
                <span>{props.post}</span>
            </div>
            <div className={cs.postLikes}>
                Likes: {props.likes}
            </div>
        </div>
    )
}

export default Post;