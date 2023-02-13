import React, {useState} from 'react';
import style from './App.module.scss';
import {ITool} from './models/toolsInterfaces'
import {
    SettingBar,
    ToolBar,
    Canvas
} from './components/index'

function App() {
    const [currTool, setCurrTool] = useState<ITool | null>(null)
    const [currCanvas, setCanvas] = useState<HTMLCanvasElement | null>(null)
    return (
        <div className={style.App}>
            <SettingBar/>
            <ToolBar setTool = {setCurrTool} canvas = {currCanvas}/>
            <Canvas setTool = {setCurrTool} setCanvas = {setCanvas}/>
        </div>
    );
}

export default App;
