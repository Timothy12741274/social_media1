import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import LinearScaleOutlinedIcon from '@mui/icons-material/LinearScaleOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
const Messages = () => {
    return (
        <div className={'msgsCont'}>
            <div className={'msgsCont_b1'}>
                <div className={'msgsCont_b1_1'} style={{color: "#7d7d7d"}}>
                    <span style={{display: "flex", alignItems: "center", marginLeft: 14}}>
                        <SearchOutlinedIcon/> <span>Search</span>
                    </span>
                    <span style={{display: "flex", alignItems: "center", marginRight: 14}}>
                        <AddIcCallOutlinedIcon/>
                        <EditOutlinedIcon/>
                        <LinearScaleOutlinedIcon/>
                    </span>
                </div>
                <div className={'msgsCont_b1_2'}>
                    <div style={{display: "flex", justifyContent: "center", marginTop: 10, color: "#7d7d7d"}}>
                        <img src={"https://pngicon.ru/file/uploads/vk-256x256.png"} style={{width: '50px', marginRight: 14}}/>
                        <span>
                            <span style={{display: "flex", width: 210, height: 35 , justifyContent: "space-between"}}>
                        <span style={{color: "white", display: "flex", alignItems: "center"}}>ВКонтакте<CheckOutlinedIcon style={{fontSize: 15}} color={"primary"}/> </span>
                        <span style={{display: "flex", alignItems: "center"}}>26 nov</span>
                                </span>
                        <span>Hello, Ivan! Here you can chat...</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Messages;