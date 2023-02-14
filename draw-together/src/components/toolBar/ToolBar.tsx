import React from 'react';
import style from './ToolBar.module.scss'
import {ToolBarButton, ColorPicker} from "./../index";
import {
    Tool,
    Brush,
    Rectangle,
    Circle,
    Eraser,
    Line
} from "../../drawingTools";


interface IToolBarProps {
    setTool: (tool: Tool) => void,
    canvas: HTMLCanvasElement | null,
    currTool: Tool | null
}

export const ToolBar = ({canvas, setTool, currTool}: IToolBarProps) => {
    //console.log(`${canvas} toolBar rerender`)
    return (
        <div className={style.toolbar}>
            <div className={style.toolbarInstruments}>
                <ToolBarButton type={"brush"} handler={() => setTool(new Brush(canvas!))}/>
                <ToolBarButton type={"rect"} handler={() => setTool(new Rectangle(canvas!))}/>
                <ToolBarButton type={"circle"} handler={() => setTool(new Circle(canvas!))}/>
                <ToolBarButton type={"eraser"} handler={() => setTool(new Eraser(canvas!))}/>
                <ToolBarButton type={"line"} handler={() => setTool(new Line(canvas!))}/>
                {/*<input type={'color'} className={style.palette} />*/}
                {currTool && <ColorPicker currTool={currTool}/>}
            </div>
            <div className={style.toolbarFunc}>
                <ToolBarButton type={'undo'}/>
                <ToolBarButton type={'redo'}/>
                <ToolBarButton type={'save'}/>
            </div>
        </div>
    );
};
