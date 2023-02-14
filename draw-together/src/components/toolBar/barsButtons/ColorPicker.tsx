import React, {
    ChangeEvent,
    ChangeEventHandler,
    EventHandler,
    FormEvent,
    SyntheticEvent,
    useEffect,
    useRef
} from 'react';
import style from './ColorPicker.module.scss';
import {Tool} from "../../../drawingTools";

interface IColorPicker {
    currTool: Tool
}


export function ColorPicker({currTool}: IColorPicker) {

    const colorPickerRef = useRef<HTMLInputElement | null>(null)

    let colorHandler : ChangeEventHandler<HTMLInputElement> = (e ) => {
        currTool.setStrokeColor = e.target.value
    }



    return (
        <>
            <input type={'color'}
                   className={style.palette}
                   ref={colorPickerRef}
                   onChange={colorHandler}/>
        </>
    );
}
