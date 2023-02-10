import React from 'react';
import style from './App.module.scss';
import {
    SettingBar,
    ToolBar,
    Canvas
} from './components/index'

function App() {
    return (
        <div className={style.App}>
            <SettingBar/>
            <ToolBar/>
            <Canvas/>
        </div>
    );
}

export default App;
