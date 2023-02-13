import React, {useEffect, useRef} from 'react';
import style from './Canvas.module.scss'
import {setCanvas, setTool} from '../../store/index'
import {useAppDispatch} from "../../store/index";
import {Brush, Rectangle} from "../../drawingTools";
import {ITool} from "../../models/toolsInterfaces";

interface ICanvasProp {
    setTool: (tool: ITool)=>void,
    setCanvas: (canvas: HTMLCanvasElement) => void
}


export const Canvas = ({setCanvas, setTool}: ICanvasProp) => {
    const pageWidth = document.documentElement.scrollWidth

    const dispatch = useAppDispatch()
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    useEffect (()=>{
        // dispatch(setCanvas(canvasRef.current!))

        if (canvasRef.current){
            setCanvas(canvasRef.current)
            setTool (new Brush(canvasRef.current))
        // dispatch(setTool(new Brush(canvasRef.current)))
        new Rectangle(canvasRef.current)
        }
    }, [])

    return (
        <div className={style.canvasWrapper}>
            {}
            <canvas ref={canvasRef} width={`${pageWidth-20}px`} height={'700px'}>
            </canvas>
        </div>
    );
};