
export class Tool {
    readonly canvas: HTMLCanvasElement
    readonly context: CanvasRenderingContext2D

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.context = canvas.getContext('2d') as CanvasRenderingContext2D
        this.context.imageSmoothingEnabled = true
        this.context.globalCompositeOperation = 'source-over'
        this.destroyListeners()
    }

    set fillColor (color: string){
        this.context.fillStyle = color
    }

    set strokeColor (color: string) {
        this.context.strokeStyle = color
    }

    set lineWidth (width: number) {
        this.context.lineWidth = width
    }

    destroyListeners(){
        this.canvas.onmousedown = null
        this.canvas.onmouseup = null
        this.canvas.onmousemove = null
    }
}

export const ITool = typeof Tool