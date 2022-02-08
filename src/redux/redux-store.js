import profile_reducer from "./profile_reducer";
import dialog_reducer from "./dialogs_reducer";
import {combineReducers, createStore} from "redux";

let reducers=combineReducers({
    dialog_reducer:dialog_reducer,profile_reducer:profile_reducer
})
let store=createStore(reducers);
export default store;