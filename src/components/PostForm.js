import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createPost, showAlert} from "../redux/actions";
import {Alert} from "./Alert";

export const PostForm = () => {
    const dispatch = useDispatch()
    const alert = useSelector(state => state.app.alert)

    const [state, setState] = useState({title: ''});

    const submitHandler = (event) => {
        event.preventDefault()

        const {title} = state

        if (!title.trim()) {
            dispatch(showAlert("No empty titles."))
            return
        }

        const newPost = {
            title, id: Date.now().toString()
        }
        setState(prev => ({...prev, title: ''}))
        dispatch(createPost(newPost))
    }
    const handleChange = (event) => {
        setState(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    return (
        <form>
            {alert && <Alert text={alert}/>}
            <div className="form-group mb-2">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title" name="title" value={state.title}
                       onChange={handleChange}/>
            </div>
            <button className='btn btn-success' type="submit" onClick={submitHandler}>Create</button>
        </form>
    );
};
