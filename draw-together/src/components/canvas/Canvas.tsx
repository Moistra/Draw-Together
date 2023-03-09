import React, {MouseEventHandler, useEffect, useRef} from 'react';
import style from './Canvas.module.scss'
import {
    useAppDispatch,
    setStoreCanvas,
    pushToUndoList
} from "../../store/index";
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

    useEffect(() => {
        if (canvasRef.current) {
            setCanvas(canvasRef.current)
            setTool(new Brush(canvasRef.current))
        }
    }, [])

    let onMouseUp: MouseEventHandler<HTMLCanvasElement> = (e) => {
        if (canvasRef.current) {
            dispatch(pushToUndoList(canvasRef.current.toDataURL()))
        }
    }

    return (
        <div className={style.canvasWrapper}>
            <canvas onMouseUp={(e) => onMouseUp(e)}
                    ref={canvasRef}
                    width={`${pageWidth - 60}px`}
                    height={`${pageHeight - 150}px`}>
            </canvas>
        </div>
    );
};