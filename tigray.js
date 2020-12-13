const cursor  = document.querySelector("div.cursor")
const canvasTag = document.querySelector("canvas.in")

const growCursor = function () {
        cursor.classList.add("is-down")
}


const shrinkCursor = function ()  {
    cursor.classList.remove("is-down")
}
//s

//move the cursor based on coordinates

const moveCursor = function (x,y) {
   cursor.style.left = x + "px"
   cursor.style.top = y + "px"
}

//set up a canvas

const setupCanvas = function (canvas) {
  const w = window.innerWidth
  const h = window.innerHeight
  const dpi = window.devicePixelRatio
     canvas.width = w * dpi 
     canvas.height = h * dpi
     canvas.style.width = w + 'px'
     canvas.style.height = h + 'px'

     //which context are we talking about 

     const context = canvas.getContext("2d")
     context.scale(dpi,dpi)
              context.fillStyle = "red"
              
}

//drawing based on the canvas, x and y 

const moveDraw = function (canvas,x,y) {

    //get the context of the canvas

    const context = canvas.getContext("2d")
        context.rect(x,y,60,40)
        context.fill()
}

setupCanvas(canvasTag)


growCursor()

document.addEventListener("mousedown", function () {
    growCursor()
})

document.addEventListener("mouseup", function () {
    shrinkCursor()

})

document.addEventListener("mousemove", function(e) {
    //where is the mouse on page and the way we find out is using the browser
    
     moveCursor(e.pageX, e.pageY)
     moveDraw(canvasTag, e.pageX,e.pageY)
})

//canvas

