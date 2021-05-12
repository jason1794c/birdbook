import { Avatar } from '@material-ui/core';
import { AccountCircle, ChatBubbleOutline, ExpandMoreOutlined, NearMe, ThumbUp } from '@material-ui/icons';
import React from 'react';
import '../css/Post.css'
import LikesBar from './LikesBar';
import db from '../firebase';
import { useStateValue } from '../context/StateProvider';
import firebase from 'firebase';

function Post({ postId, profilePic, image, username, timestamp, message, likes }) {
    const [{ user }, dispatch] = useStateValue();
    
    // Like functionality
    const addLike = () => {
        db.collection('posts').doc(postId).update({
            likes: firebase.firestore.FieldValue.arrayUnion(user.email)
        });
    };

    // Unlike functionality
    const unlike = () => {
        db.collection('posts').doc(postId).update({
            likes: firebase.firestore.FieldValue.arrayRemove(user.email)
        });
    };

    return (
        <div className="post">
            <div className="post__top">
                <Avatar 
                    className="post__avatar"
                    src={profilePic}
                />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>
            
            <div className="post__image">
                <img src={image} alt="" />
            </div>

            {likes.length > 0 ? 
                <LikesBar likeNumber={likes.length} />
            : null
            }
            
            <div className="post__options">
                <div 
                    className="post__option"
                    style={likes.includes(user.email) ? {
                        color: "#2e81f4"
                    }: null}
                    onClick={likes.includes(user.email) ? unlike : addLike}
                >
                    <ThumbUp />
                    <p>Like</p>
                </div>

                <div className="post__option">
                    <ChatBubbleOutline />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMe />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircle />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    )
}

export default Post
