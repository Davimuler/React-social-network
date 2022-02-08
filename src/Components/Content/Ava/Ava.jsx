import React from  'react'
import s from './Ava.module.css'

const Ava=(props)=>{
    return(
       <div>
           <img src={'https://www.meme-arsenal.com/memes/3ac31984706b47dd24d050b57f825e3b.jpg'} className={s.img}/>
           <div className={s.item}>
               {props.name}
           </div>
       </div>
    );
}
export default Ava;