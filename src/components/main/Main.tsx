import React from 'react';
import {Route, Routes} from "react-router-dom";
import MyPage from "../../pages/myPage/MyPage";
import s from './b1BottomElement.module.css'
import {useAppSelector} from "../../store/hooks/hooks";
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AirplayOutlinedIcon from '@mui/icons-material/AirplayOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import ArticleIcon from '@mui/icons-material/Article';
import {Button, Input} from "@mui/material";

const Main = () => {
    const users = useAppSelector(state => state.userReducer.users)
    console.log(users)

    return (
        <div className={"main"}>
           {/* <div className={"e"}>*/}
            <div className={"b1"} style={{position: "relative"}}>
                <div className={s.block} style={{position: "absolute", backgroundColor: "#181818", borderRadius: '10px', width: '100%', height: '30%', bottom: '0%'}}>
                    <span>
                        <img className={s.avatar} src={"https://th.bing.com/th/id/OIP.EQsFO8EbfFtODi_v9lqiiQAAAA?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7"}/>
                        <span></span>
                    </span>
                </div>
            </div>
            <span className={"b2"}>
                <div style={{color: "#7d7d7d", margin: 10}}>
                <Button style={{color: "#7d7d7d"}}  >
                    <InsertPhotoIcon/> Photo
                </Button>
                <Button style={{color: "#7d7d7d"}}  >
                    <AirplayOutlinedIcon/> Clips
                </Button>
                <Button style={{color: "#7d7d7d"}}  >
                    <LibraryMusicOutlinedIcon/> Music
                </Button>
                <Button style={{color: "#7d7d7d"}}  >
                    <ArticleIcon/> Articles
                </Button>
            </div>
                <div style={{display: "flex", alignItems: "center", flexDirection: "column",color: "#7d7d7d", position: "relative"}}>
                    <span>Вы еще не добавили фото</span>

                    <Button  size={"small"} style={{backgroundColor: "#7d7d7d", color: "white", marginTop: 20, borderRadius: '9px'}}>
                        <input onChange={(e)=>console.log(e.currentTarget.value)} type={"file"} style={{position: "absolute", display: "", opacity: 0, width: '100%', height: '100%'}}/>
                        Загрузить фото
                    </Button>


                </div>

            </span>
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