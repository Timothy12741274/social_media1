import React, {useEffect, useRef, useState} from 'react';
import ReactDOM from "react-dom/client";
import {
    Box,
    Button,
    Card,
    FormControl,
    InputLabel,
    MenuItem,
    MenuList,
    Modal,
    Paper, Select,
    Switch,
    Typography
} from "@mui/material";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import RttIcon from '@mui/icons-material/Rtt';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import LockIcon from '@mui/icons-material/Lock';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import {SelectChangeEvent} from '@mui/material/Select';

const News = () => {
    let [secondCounter, setSecondCounter] = useState(0)
    const incCounter = () => {
        setSecondCounter(secondCounter += 1)
    }

    //setInterval(()=>console.log(window.scrollY), 2000)

    //const obj = element.getBoundingClientRect()
    //console.log(obj.y + obj.height)
    /*const a = useRef('1')
    console.log(a)*/
    let elem = {}
    let bot = 10000
    //console.log(window.innerHeight)
    let [signal, setSignal] = useState(false)
    let [Bot, setBot] = useState(0)
    const onWheelHandler = (el: any) => {
        //console.log('a')
        /*const infoObj = el.getBoundingClientRect()
        console.log(infoObj.height)
        if (window.scrollY > infoObj.y + infoObj.height - window.innerHeight){
            debugger
            obj = {position: "fixed"}
        }*/
        const infoObj = el.getBoundingClientRect()
        bot = infoObj.bottom/*
        if(window.scrollY > bot - window.innerHeight){
            console.log(true)
            setSignal({})
        }*/
        //console.log(bot)
        //console.log(window.innerHeight)

        //console.log(`bot: ${bot}`)
        /*if(bot < window.innerHeight || bot === window.innerHeight){
            /!*setSignal({})*!/
            setBot(bot)
            console.log('signal')
        }*/
        //console.log('0')
        /*console.log(bot)
        if(window.innerHeight - 5 < bot && bot < window.innerHeight + 5){
            //console.log('1')
            if(bot < window.innerHeight){
                console.log('1_1')
                setSignal(true)
            } else {
                console.log('1_2')
                setSignal(false)
            }
        }*/
        console.log(window.scrollY)

        if (window.scrollY > 222 && !signal) {
            setSignal(true)
        }
        if (window.scrollY < 222 && signal) {
            setSignal(false)
        }


    }
    //console.log(`${Bot < window.innerHeight}, Bot: ${Bot}, window.innerHeight: ${window.innerHeight}`)
    /*style={{position: "fixed", right: window.innerWidth/5, width: window.innerWidth*0.22, backgroundColor: "aquamarine"}}*/
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const label = {inputProps: {'aria-label': 'Switch demo'}};
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <div className={'k'}>
            <div
                className={'bn1'}
                onWheel={(e) => onWheelHandler(e.currentTarget)}
            >
                <div className={'bn1_1e'}>
                    <span style={{display: "flex", alignItems: "center"}}>
                    <img
                        src={"https://avatars.mds.yandex.net/get-pdb/2800861/2b8a5ef7-141f-4f96-a398-c116a575bdc3/s1200"}
                        style={{width: 28, borderRadius: '50%', marginRight: 10, marginLeft: 10}}/>
                    <span style={{color: '#7d7d7d'}}>Anything new?</span>
                    </span>
                    <span style={{display: "flex", alignItems: "center"}}>
                        <CameraAltIcon className={'icn'} sx={{color: "#7d7d7d"}}/>
                        <PlayCircleOutlineIcon className={'icn'} sx={{color: "#7d7d7d"}}/>
                        <LibraryMusicIcon className={'icn'} sx={{color: "#7d7d7d"}}/>
                        <RttIcon className={'icn'} sx={{color: "#7d7d7d"}}/>
                        <span style={{width: 2, height: 16, backgroundColor: '#7d7d7d', marginRight: 10}}></span>
                        <EmojiObjectsIcon className={'icn'} sx={{color: "#7d7d7d"}}/>
                        <LockIcon className={'icn'} sx={{color: "#7d7d7d"}}/>
                    </span>
                </div>
                <div className={'bn1_2e'}>
                    <div style={{margin: '0 auto'}}><CameraAltOutlinedIcon fontSize={'large'} color={"primary"}/></div>
                    <p style={{
                        fontSize: 14,
                        width: '70%',
                        margin: '20px auto',
                        position: "relative",
                        bottom: 0,
                        color: "#7d7d7d"
                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet architecto deserunt, eius
                        eveniet itaque laboriosam libero molestiaex?
                    </p>
                    <Button onClick={handleOpen}><CameraAltOutlinedIcon fontSize={"small"}/>Upload a photo</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Text in a modal
                            </Typography>
                            <Typography id="modal-modal-description" sx={{mt: 2}}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                        </Box>
                    </Modal>
                </div>
                <div className={'bn1_3e'}>
                    <div>High education</div>
                    <p style={{color: "#7d7d7d", width: '70%'}}>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Et, numquam.</p>
                    <div><span>City:</span><span>
                        <select placeholder={"Enter the name of the city"} style={{
                            backgroundColor: "transparent",
                            borderRadius: '5px',
                            border: '1px solid #4f4f4f',
                            width: 220,
                            height: 25
                        }}/>


                        </span>
                        {/*<span>
                            <FormControl sx={{ m: 1, minWidth: 80 }}>
                                <InputLabel id="demo-simple-select-autowidth-label" style={{color: "#7d7d7d"}}>
                                    Enter the name of the city
                                </InputLabel>
                                <Select
                                    sx={{height: 30, width: 250}}
                                    labelId="21"
                                    id="demo-simple-select-autowidth"
                                    value={age}
                                    onChange={handleChange}
                                    autoWidth
                                    label="City select"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Twenty</MenuItem>
                                    <MenuItem value={21}>Twenty one</MenuItem>
                                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                                </Select>
                            </FormControl>
                        </span>*/}
                    </div>
                    <div>
                        <span style={{position: "relative", right: 35, top: 10}}>
                        <Button>Save</Button>
                        <Button>Skip</Button>
                    </span>
                    </div>
                </div>
            </div>
            <div
                className={signal ? 'bn2Fxd' : 'bn2'}
                /*onWheel={(e)=>onWheelHandler(e.currentTarget)}*/

            >
                <div className={'bn2_1e'}>

                    <Paper style={{borderRadius: 12, backgroundColor: "#181818", color: "white"}}>
                        <MenuList>
                            <span className={'sp'}><MenuItem>Profile</MenuItem></span>
                            <MenuItem><span>My account</span></MenuItem>
                            <MenuItem>Logout</MenuItem>
                            <MenuItem>Logout</MenuItem>
                            <MenuItem>Logout</MenuItem>
                            <MenuItem>Logout</MenuItem>
                            <MenuItem>Logout</MenuItem>
                            <MenuItem>Logout</MenuItem>
                            <MenuItem>Logout</MenuItem>
                        </MenuList>
                    </Paper>

                </div>
                {/*<div style={signal ? {position: "fixed", bottom: 0, backgroundColor: "green"}
                    : {position: "fixed", bottom: 0, backgroundColor: "red", }}>a</div>*/}
                <div className={'bn2_2e'}>
                    <span style={{display: "flex", alignItems: "center", fontSize: 15}}>
                        <LocalFireDepartmentIcon color={'warning'}/>
                        <span>Interesting first</span>
                    </span>
                    <Switch {...label} defaultChecked/>
                </div>
                {/*<div className={'bn2_3e'}></div>*/}
            </div>

            {/*<div
                className={signal ? 'bn2Fxd' : 'bn2'}
            >b2
            </div>*/}

        </div>
    );
};
/*const e = document.getElementById('1')
const element = ReactDOM.createRoot(e)*/

export default News;