import React from 'react';
import {Route, Routes} from "react-router-dom";
import MyPage from "../../pages/myPage/MyPage";
import s from './b1BottomElement.module.css'

const Main = () => {
    return (
        <div className={"main"}>
           {/* <div className={"e"}>*/}
            <div className={"b1"} style={{position: "relative"}}>
                <div className={s.block} style={{position: "absolute", backgroundColor: "white", borderRadius: '10px', width: '100%', height: '30%', bottom: '0%'}}>
                    <span>
                        <img className={s.avatar} src={"https://th.bing.com/th/id/OIP.EQsFO8EbfFtODi_v9lqiiQAAAA?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7"}/>
                        <span></span>
                    </span>
                </div>
            </div>
            <span className={"b2"}>b2</span>
            <span className={"b3"}>b3</span>
            <div className={"b4"}>b4</div>
            <div className={"b5"}>b5</div>
            <div className={"p1"}></div>
            <div className={"p2"}></div>
            {/*</div>*/}
            {/*<Routes>
            <Route path={'/'}>
                <MyPage />
            </Route>
            </Routes>*/}
            </div>
    );
};

export default Main;