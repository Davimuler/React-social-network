import React from 'react'

import Post from './Post/Post'
import s from './content.module.css'
import Ava from './Ava/Ava'
let NewPost=React.createRef();
const Content = (props) => {
    let addPost=()=>{
        let np=NewPost.current.value;
        //props.updatePost();
        props.addPost();
    }

    let PElements=props.posts.map(p=> <Post count={p.count}/>)
    return (
        <div>
            <Ava name={'David'}></Ava>
            {PElements}
            <div>
                <textarea  ref={NewPost}></textarea>
            </div>
            <div>
                <button onClick={addPost}>add</button>
            </div>
        </div>
    );
}
export default Content;