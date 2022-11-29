import React from 'react';
import {Box, Input, InputAdornment, TextField} from "@mui/material";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Header = () => {
    return (
        <div className={"header"}>
            <span style={{fontSize: 15, fontWeight: "bold", display: "flex", alignItems: "center", marginLeft: "225px"}}>
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsMVj2q9Jj46k9UZMPpKf27CyssVdtdgiPvA&usqp=CAU"}
            style={{borderRadius: '55px', width: '35px'}}
            />
                ВКонтакте
                </span>
            <input style={{width: '100px', height: '20px', borderRadius: '10px', backgroundColor: "lightgray", border: "none"}} placeholder={`Поиск`}/>
            <NotificationsNoneOutlinedIcon />
            <MusicNoteOutlinedIcon/>
        </div>
    );
};

export default Header;