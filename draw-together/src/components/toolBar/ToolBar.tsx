import React from 'react';
import style from './ToolBar.module.scss'
import {ToolBarButton} from "./../index";
import {ITool} from "../../models/toolsInterfaces";


interface IToolBarProps {
    setTool: (tool: ITool) => void,
    canvas: HTMLCanvasElement | null
}


export const ToolBar = ({canvas, setTool}:IToolBarProps) => {
    return (
        <div className={style.toolbar}>
            <div className={style.toolbarInstruments}>
                <ToolBarButton type={"brush"}/>
                <ToolBarButton type={"rect"}/>
                <ToolBarButton type={"circle"}/>
                <ToolBarButton type={"eraser"}/>
                <ToolBarButton type={"line"}/>
               <input type={'color'} className={style.palette}/>
            </div>
            <div className={style.toolbarFunc}>
                <ToolBarButton type={'undo'}/>
                <ToolBarButton type={'redo'}/>
                <ToolBarButton type={'save'}/>
            </div>
        </div>
    );
};
