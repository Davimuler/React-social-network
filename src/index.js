import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/*import state, {addPost} from "./redux/state";
import {addMessage} from "./redux/state";
import {updateTextArea} from "./redux/state";
import {subscribe} from "./redux/state";*/
import {BrowserRouter} from "react-router-dom";
import store from "./redux/state";

let rerender=(state)=> {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App dispatch={store.dispatch.bind(store)} addPost={store.addPost.bind(store)} textArea={store.getState().TextArea} updateTextArea={store.updateTextArea.bind(store)} //addMessage={store.addMessage.bind(store)}
                     posts={store.getState().PostData} Dialogs={store.getState().DialogData} Messages={store.getState().MessageItemData}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );}
rerender(store.getState());
store.subscribe(rerender);
    reportWebVitals();
