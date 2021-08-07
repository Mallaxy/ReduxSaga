import React from 'react';
import {Post} from "./Post";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../redux/actions";
import {Loader} from "./Loader";

export const FetchedPosts = () => {
    const dispatch = useDispatch()
    const [posts, loading] = useSelector(state => [state.posts.fetchedPosts, state.app.loading])
    if (loading) return <Loader/>
    if (!posts.length) return (
        <div>
            <h3>No Posts...(</h3>
            <button className="btn btn-primary" onClick={() => dispatch(fetchPosts())}>Fetch</button>
        </div>
    )
    return posts.map(post => <Post post={post} key={post.id}/>);
};
