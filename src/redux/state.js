import dialog_reducer from "./dialogs_reducer";
import profile_reducer from "./profile_reducer";
const ADD_MESSAGE='addMessage';
const ADD_POST='addPost';


let store = {
    _callsubscriber(){},
    getState(){
        return this._state;
    },
     _state : {
        MessageItemData: [
            {id: 0, message: 'Hello'},
            {id: 1, message: 'How are you'},
            {id: 2, message: 'Missing you'},
            {id: 3, message: 'zange range'},
        ],
        DialogData: [
            {id: 0, name: 'Arat'},
            {id: 1, name: 'David'},
            {id: 2, name: 'Max'},
            {id: 3, name: 'Vlad'}
        ],
        PostData: [
            {count: 10},
            {count: 15},
            {count: 15},
            {count: 16}
        ],
        TextArea: 'DavidMuler'
    },
    dispatch(action){
        this._state.PostData=profile_reducer( this._state.PostData,action);
        this._state.MessageItemData=dialog_reducer( this._state,action);
          this._callsubscriber(this._state)
      }
    ,
   addMessage (SomeMessage)  {
        let NewMessage = {id: 4, message: SomeMessage};
        this._state.MessageItemData.push(NewMessage);
        this._callsubscriber(store);
    },
    addPost  ()  {
        let NewPost = {count: 666};
        this._state.PostData.push(NewPost);
        this._callsubscriber(this._state)
    },
    updateTextArea  (NewText) {
        this._state.TextArea = NewText;
        this._callsubscriber(this._state)
    },
     subscribe (observer)  {
        this._callsubscriber = observer;
    },

}
export const addMessageCreator=(Message)=>{
    return {type:ADD_MESSAGE, SomeMessage:Message}
}
export default store;