import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import News from "./pages/news/News";

function App() {
  return (
      <div className={"l"}>
        <Header/>
    <div className="App" style={{marginRight: '20vw', marginLeft: '10vw', marginTop: 18}}>
      {/*<Header />*/}
      <Sidebar />
      <Routes>
        <Route path={'/'} element={<Main />}/>
        <Route path={'/news'} element={<News />}/>
      </Routes>

    </div>
      </div>
  );
}

export default App;
