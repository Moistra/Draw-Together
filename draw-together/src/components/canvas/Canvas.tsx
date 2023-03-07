import React, {useEffect, useRef} from 'react';
import style from './Canvas.module.scss'
import {useAppDispatch} from "../../store/index";
import {Tool, Brush} from "../../drawingTools";


interface ICanvasProp {
    setTool: (tool: Tool) => void,
    setCanvas: (canvas: HTMLCanvasElement) => void
}


export const Canvas = ({setCanvas, setTool}: ICanvasProp) => {
    let pageWidth = document.documentElement.clientWidth
    let pageHeight = document.documentElement.clientHeight


    const dispatch = useAppDispatch()
    const canvasRef = useRef<HTMLCanvasElement | null>(null)


    //console.log(`canvas rerender ${canvasRef.current}`)
    useEffect(() => {
        // dispatch(setCanvas(canvasRef.current!))
        if (canvasRef.current) {
            setCanvas(canvasRef.current)
            setTool(new Brush(canvasRef.current))
            // dispatch(setTool(new Brush(canvasRef.current)))
        }
    }, [])

    return (
        <div className={style.canvasWrapper}>
            <canvas ref={canvasRef} width={`${pageWidth - 60}px`} height={`${pageHeight-100}px`}>
            </canvas>
        </div>
    );
};