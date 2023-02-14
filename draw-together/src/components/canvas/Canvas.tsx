import React, {useEffect, useRef} from 'react';
import style from './Canvas.module.scss'
import {useAppDispatch} from "../../store/index";
import {Tool, Brush} from "../../drawingTools";
import {setCanvas, setTool} from '../../store/index'

interface ICanvasProp {
    setTool: (tool: Tool)=>void,
    setCanvas: (canvas: HTMLCanvasElement) => void
}


export const Canvas = ({setCanvas, setTool}: ICanvasProp) => {
    const pageWidth = document.documentElement.scrollWidth

    const dispatch = useAppDispatch()
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    //console.log(`canvas rerender ${canvasRef.current}`)
    useEffect (()=>{
        // dispatch(setCanvas(canvasRef.current!))
        if (canvasRef.current){
            setCanvas(canvasRef.current)
            setTool (new Brush(canvasRef.current))
        // dispatch(setTool(new Brush(canvasRef.current)))
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