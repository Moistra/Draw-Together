import {Tool} from './index'


export class Line extends Tool {

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
        if (this.mouseDown) {
            this.mouseDown = false
            const img = new Image()
            if (this.savedCanvasData)
                img.src = this.savedCanvasData
            img.onload = () => {
                this.context.setLineDash([0, 0]);
                this.context.beginPath()
                this.context.moveTo(this.startX!, this.startY!)
                this.context.lineTo(e.x - this.canvas.offsetLeft, e.y - this.canvas.offsetTop)
                this.context.stroke()
            }

        }
    }

    mouseDownHandler(e: MouseEvent) {
        this.mouseDown = true
        this.startX = e.x - this.canvas.offsetLeft
        this.startY = e.y - this.canvas.offsetTop

        this.savedCanvasData = this.canvas.toDataURL()
    }

    mouseMoveHandler(e: MouseEvent) {
        if (this.mouseDown) {
            this.draw(e.x - this.canvas.offsetLeft, e.y - this.canvas.offsetTop)
        }
    }

    draw(x: number, y: number) {
        const img = new Image()
        if (this.savedCanvasData)
            img.src = this.savedCanvasData
        img.onload = () => {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.context.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            this.context.setLineDash([10, 20]);
            this.context.beginPath()
            this.context.moveTo(this.startX!, this.startY!)
            this.context.lineTo(x, y)
            this.context.stroke()
        }
    }
}