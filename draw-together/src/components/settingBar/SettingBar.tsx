import React from 'react';
import style from './SettingBar.module.scss'
import {Tool} from '../../drawingTools/index'
import {ColorPicker, LineWidthPicker} from './../index'


interface ISettingBar {
    currTool: Tool | null
}

export const SettingBar = ({currTool}: ISettingBar) => {
    return (
        <div className={style.settingBar}>
            <div className={style.settingItem}>
                <span>Stroke color:</span>
            {currTool && <ColorPicker currTool={currTool} type={"strokeColor"}/>}
            </div>
            <div className={style.settingItem}>
                <span>Fill color:</span>
                {currTool && <ColorPicker currTool={currTool} type={"fillColor"}/>}
            </div>
            <div className={style.settingItem}>
                <span>Line width:</span>
                {currTool && <LineWidthPicker currTool={currTool}/>}
            </div>
        </div>
    );
};

