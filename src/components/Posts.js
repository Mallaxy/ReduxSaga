import React from 'react';
import {Post} from "./Post";
import {useSelector} from "react-redux";

export const Posts = () => {
    const posts = useSelector(state => state.posts.posts)
    if (!posts.length) return <div><h4>No Posts...(</h4></div>
    return posts.map((post) => <Post post={post} key={post.id}/>);
};
