import {Tool} from './index'


export class Eraser extends Tool {

    mouseDown: boolean

    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
        this.mouseDown = false
        this.context.globalCompositeOperation = 'destination-out'
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
        this.context.moveTo(e.x - this.canvas.offsetLeft, e.y  - this.canvas.offsetTop)
    }
    mouseMoveHandler(e: MouseEvent){
        if (this.mouseDown){

            this.draw(e.x - this.canvas.offsetLeft, e.y  - this.canvas.offsetTop)
        }
    }
    draw(x:number, y:number){
        this.context.lineTo(x, y)
        this.context.stroke()
    }
}