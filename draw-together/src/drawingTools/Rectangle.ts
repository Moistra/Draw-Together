import {Tool} from './index'


export class Rectangle extends Tool {

    mouseDown: boolean
    startX: number | null
    startY: number | null
    savedCanvasData: string | null

    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
        this.mouseDown = false
        this.startX = null
        this.startY = null
        this.savedCanvasData = null
        this.initListeners()
    }

    initListeners() {
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
    }

    mouseUpHandler(e: MouseEvent) {
        this.mouseDown = false
        this.startX = null
        this.startY = null
        this.context.setLineDash([10, 0]);
        this.context.stroke()
        this.context.fill()
    }

    mouseDownHandler(e: MouseEvent) {
        this.mouseDown = true
        this.startX = (e.clientX - this.canvas.offsetLeft)
        this.startY = (e.clientY - this.canvas.offsetTop)
        this.savedCanvasData = this.canvas.toDataURL()
    }

    mouseMoveHandler(e: MouseEvent) {
        if (this.mouseDown && (this.startX && this.startY)) {
            let width = e.x - this.canvas.offsetLeft - this.startX
            let height = e.y - this.canvas.offsetTop - this.startY
            this.draw(this.startX, this.startY, width, height)
        }
    }

    draw(x: number, y: number, w: number, h: number) {
        const img = new Image()
        if (this.savedCanvasData)
        img.src = this.savedCanvasData
        img.onload = () => {
            this.context.clearRect(0,0, this.canvas.width, this.canvas.height)
            this.context.drawImage(img,0,0, this.canvas.width, this.canvas.height)
            this.context.beginPath()
            this.context.rect(this.startX!, this.startY!, w, h)
            this.context.setLineDash([10, 20]);
            this.context.stroke()
        }
    }
}