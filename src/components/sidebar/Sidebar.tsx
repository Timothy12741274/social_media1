import React from 'react';
import {list} from "./buttonsList/list";
import {NavLink} from "react-router-dom";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import AirplayOutlinedIcon from '@mui/icons-material/AirplayOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const Sidebar = () => {
    return (
        <div className={"sidebar"}>
            <div style={{display: 'flex', flexDirection: "column", }}>
                {list.map((btn: any) => {
                    return (
                        <div key={btn.path} style={{marginBottom: 8, color: "black"}}>
                        <NavLink to={btn.path} style={{textDecoration: 'none', marginBottom: 20, fontSize: 13, color: "black"}}>
                            <span style={{ display: "flex", alignItems: "center"}}>
                                <span style={{marginRight: 8}}>
                                    <btn.icon color={"primary"} fontSize={"small"}/>
                                </span>
                                <span>{btn.name}</span>
                            </span>
                        </NavLink>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Sidebar;