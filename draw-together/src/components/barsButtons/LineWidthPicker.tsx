import React, {ChangeEventHandler, EventHandler, useState} from 'react';
import {Tool} from '../../drawingTools/index'
import style from './LineWidthPicker.module.scss'


interface ILineWidthPicker {
    currTool: Tool | null
}

export function LineWidthPicker({currTool}: ILineWidthPicker) {

    let [lineWidth, setLineWidth] = useState('0')


    let lineWidthHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (currTool) {
            currTool.lineWidth = +e.target.value
            setLineWidth(() => e.target.value)
        }
    }

    return (
        <div className={style.lineWidthPicker}>
            {currTool && <input type={"range"}
                                min={1}
                                max={100}
                                defaultValue={1}
                                title={lineWidth}
                                onChange={lineWidthHandler}/>}
        </div>
    );
}