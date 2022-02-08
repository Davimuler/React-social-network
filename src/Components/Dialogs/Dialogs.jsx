import React, {createRef} from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {addMessageCreator} from "../../redux/state";

let NewMessage=React.createRef();

/*let DialogData=[
    {id:0,name:'Arat'},
    {id:1,name:'David'},
    {id:2,name:'Max'},
    {id:3,name:'Vlad'}
]*/
/*let MessageItemData=[
    {id:0,message:'Hello'},
    {id:1,message:'How are you'},
    {id:2,message:'Missing you'},
    {id:3,message:'zange range'}
]*/
const DialogItem=(props)=>
{
    let path='/Messages/' + props.id;
    return(
        <div className={s.message}>
            <div> <NavLink to={path} className = { navData => navData.isActive ? s.active : s.user }>{props.name}</NavLink></div>
        </div>
    );
}
const MessageItem=(props)=>{
    return(
        <div className={s.message}>{props.message}</div>
    );
}
/*let DialogElements=DialogData.map((d)=>(<DialogItem name={d.name} id={d.id}></DialogItem>))*/
/*let Messages=MessageItemData.map((m)=>(<MessageItem message={m.message}></MessageItem>))*/

const Dialogs = (props) => {
    let DialogElements=props.ArrayDialogs.map((d)=>(<DialogItem name={d.name} id={d.id}></DialogItem>))
    let Messages=props.ArrayMessages.map((m)=>(<MessageItem message={m.message}></MessageItem>))
    let addMessage=()=>{
       /* =NewMessage.current.value;*/
        props.dispatch(addMessageCreator(props.textArea));
        //props.dispatch({type:'addMessage' ,SomeMessage:props.textArea});
        props.updateTextArea('')
    }
    let onMessageChange=()=>{
let text=NewMessage.current.value;
props.updateTextArea(text);
    }
    return (
        <div>
            <div className={s.Dialogs}>
                <div className={s.users}>
                    {
                        DialogElements
                    }
                </div>
                <div className={s.message}>
                    {Messages}
                </div>
            </div>
            <div>
                <textarea onChange={onMessageChange} ref={NewMessage} value={props.textArea}></textarea>
            </div>
            <div>
                <button onClick={addMessage}>Send Message</button>
            </div>
        </div>



    );
}
export default Dialogs;