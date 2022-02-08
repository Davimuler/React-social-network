import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div><img
                src={'https://static4.depositphotos.com/1000423/454/i/600/depositphotos_4548401-stock-photo-symbol-of-yin-and-yang.jpg'}
                className={s.image}/></div>
            <span className={s.mark}>Likes={props.count}</span>
        </div>
    );
}
export default Post;