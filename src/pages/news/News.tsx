import React, {useRef, useState} from 'react';
import ReactDOM from "react-dom/client";

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
    const onWheelHandler = (el:any)=>{
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
        console.log('0')
        if(window.innerHeight - 5 < bot && bot < window.innerHeight + 5){
            //console.log('1')
            if(bot < window.innerHeight){
                //console.log('1_1')
                setSignal(true)
            } else {
                //console.log('1_2')
                setSignal(false)
            }
        }


    }
    console.log(`${Bot < window.innerHeight}, Bot: ${Bot}, window.innerHeight: ${window.innerHeight}`)

    return (
        <div className={'k'}>
            <div className={'bn1'}>b1</div>
            <div style={{position: "relative"}}
                className={'bn2'} onWheel={(e)=>onWheelHandler(e.currentTarget)}>b2
                <div style={signal ? {position: "absolute", bottom: 0, backgroundColor: "green", width: '100%'}
                    : {position: "absolute", bottom: 0, backgroundColor: "red", width: '100%'}}>a</div>
            </div>
        </div>
    );
};
/*const e = document.getElementById('1')
const element = ReactDOM.createRoot(e)*/

export default News;