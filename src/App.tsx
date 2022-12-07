import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import News from "./pages/news/News";
import Messages from "./pages/messages/Messages";
import Albums from "./pages/albums/Albums";

function App() {
  return (
      <div className={"l"}>
        <Header/>
    <div className="App" style={{marginRight: '10vw', marginLeft: '10vw', marginTop: 18}}>
      {/*<Header />*/}
      <Sidebar />

      <Routes>
        <Route path={'/'} element={<Main />}/>
        <Route path={'/news'} element={<News />}/>
          <Route path={'/messages'} element={<Messages />}/>
          <Route path={'/albums'} element={<Albums />}/>
      </Routes>
    </div>
      </div>
  );
}

export default App;
