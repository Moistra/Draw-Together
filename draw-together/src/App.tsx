import React, {useState} from 'react';
import style from './App.module.scss';

import {
    SettingBar,
    ToolBar,
    Canvas
} from './components/index'
import {Tool} from "./drawingTools";

function App() {
    const [currTool, setCurrTool] = useState<Tool | null>(null)
    const [currCanvas, setCanvas] = useState<HTMLCanvasElement | null>(null)
    //console.log(`app rerender ${currCanvas}`)
    return (
        <div className={style.App}>
            <SettingBar/>
            <ToolBar setTool = {setCurrTool} canvas = {currCanvas} currTool={currTool}/>
            <Canvas setTool = {setCurrTool} setCanvas = {setCanvas}/>
        </div>
    );
}

export default App;
