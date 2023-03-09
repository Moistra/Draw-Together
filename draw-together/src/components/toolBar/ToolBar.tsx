import React from 'react';
import style from './ToolBar.module.scss'
import {ToolBarButton} from "./../index";
import {
    Tool,
    Brush,
    Rectangle,
    Circle,
    Eraser,
    Line
} from "../../drawingTools";
import {undo, redo, useAppDispatch} from './../../store/index'


interface IToolBarProps {
    setTool: (tool: Tool) => void,
    canvas: HTMLCanvasElement | null,
    currTool: Tool | null
}

export const ToolBar = ({canvas, setTool, currTool}: IToolBarProps) => {
    //console.log(`${canvas} toolBar rerender`)

    const dispatch = useAppDispatch()

    return (
        <div className={style.toolbar}>
            {canvas && <div className={style.toolbarInstruments}>
                <ToolBarButton type={"brush"} handler={() => setTool(new Brush(canvas))}/>
                <ToolBarButton type={"rect"} handler={() => setTool(new Rectangle(canvas))}/>
                <ToolBarButton type={"circle"} handler={() => setTool(new Circle(canvas))}/>
                <ToolBarButton type={"eraser"} handler={() => setTool(new Eraser(canvas))}/>
                <ToolBarButton type={"line"} handler={() => setTool(new Line(canvas))}/>
            </div>
            }
            {canvas && <div className={style.toolbarFunc}>
                <ToolBarButton type={'undo'} handler={() => dispatch(undo(canvas))}/>
                <ToolBarButton type={'redo'} handler={() => dispatch(redo(canvas))}/>
                <ToolBarButton type={'save'}/>
            </div>
            }
        </div>
    );
};
