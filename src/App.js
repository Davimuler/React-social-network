import logo from './logo.svg';
import React from  'react'
import './App.css';
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import Dialogs from './Components/Dialogs/Dialogs'
import Content from './Components/Content/content';
import Musik from  './Components/Musik/Musik'
import  News  from './Components/News/News'
import { Route, Routes} from "react-router-dom";
const App=(props)=> {
  return (
      <div className={'app-wrapper'} >
        <Header/>
        <Nav/>
          <Routes>
              <Route exact path="/Messages" element={<Dialogs dispatch={props.dispatch} textArea={props.textArea} updateTextArea={props.updateTextArea} addMessage={props.addMessage} ArrayDialogs={props.Dialogs} ArrayMessages={props.Messages}/>}/>
              <Route exact path="/Profile" element={<Content addPost={props.addPost} posts={props.posts}/>}/>
              <Route exact path="/Musik" element={<Musik />}/>
              <Route exact path="/News" element={<News />}/>
          </Routes>
      </div>
  );
}


export default App;
