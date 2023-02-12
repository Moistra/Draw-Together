import {Tool} from './index'
import {MouseEventHandler} from "react";


export class Brush extends Tool {

    mouseDown: boolean

    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
        this.mouseDown = false
        this.initListeners()
    }

    initListeners() {
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
    }

    mouseUpHandler(e: MouseEvent){
        this.mouseDown = false
    }
    mouseDownHandler(e: MouseEvent){
        this.mouseDown = true
        this.context.beginPath()
        this.context.moveTo(e.x - this.canvas.offsetTop, e.y  - this.canvas.offsetTop)
    }
    mouseMoveHandler(e: MouseEvent){
        if (this.mouseDown){
            // console.log(`x:${e.x- this.canvas.offsetLeft} y:${e.y  - this.canvas.offsetTop}`)
            // console.log(`offset x:${this.canvas.offsetLeft} offset y:${this.canvas.offsetTop}`)
            this.draw(e.x - this.canvas.offsetLeft, e.y  - this.canvas.offsetTop)
        }
    }
    draw(x:number, y:number){
        this.context.lineTo(x, y)
        this.context.stroke()
    }
}