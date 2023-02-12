import {ITool} from '../models/toolsInterfaces'


export class Tool implements ITool{
    canvas: HTMLCanvasElement
    context: CanvasRenderingContext2D

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.context = canvas.getContext('2d') as CanvasRenderingContext2D
        this.context.imageSmoothingEnabled = true
        this.destroyListeners()
    }

    destroyListeners(){
        this.canvas.onmousedown = null
        this.canvas.onmouseup = null
        this.canvas.onmousemove = null
    }
}