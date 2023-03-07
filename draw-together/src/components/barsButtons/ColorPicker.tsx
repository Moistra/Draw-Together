import React, {ChangeEventHandler, useState} from 'react';
import style from './ColorPicker.module.scss';
import {Tool} from "../../drawingTools";

interface IColorPicker {
    currTool: Tool,
    type: 'strokeColor' | 'fillColor'
}


export function ColorPicker({currTool, type}: IColorPicker) {
    let [pickedColor, setPickedColor] = useState('linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)')
    let colorHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        setPickedColor(() => e.target.value)
        if (type === "strokeColor") {
            currTool.strokeColor = e.target.value;
        }
        if (type === "fillColor") {
            currTool.fillColor = e.target.value;
        }
    }

    return (
        <div className={style.palette} style={{background: pickedColor}}>
                <input type={'color'}
                       onChange={colorHandler}/>

        </div>
    );
}
