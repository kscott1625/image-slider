const nextEL =document.querySelector(".next")
const prevEL =document.querySelector(".prev")

const imagesCon= document.querySelector(".images")
const imgsEl = document.querySelectorAll("img")


let currentPic = 1

let timeOut;

nextEL.addEventListener("click", () => {
currentPic++
clearTimeout(timeOut)
upDateImg()
} )

prevEL.addEventListener("click", () => {
    currentPic--
    clearTimeout(timeOut)
    upDateImg()
    } )

upDateImg()

function upDateImg(){
    if(currentPic > imgsEl.length){
        currentPic = 1
    } else if (currentPic < 1) {
currentPic = imgsEl.length;
        }
    
imagesCon.style.transform = `translateX(-${(currentPic - 1) * 600}px)`
timeOut = setTimeout(() => {
currentPic++
upDateImg()
}, 3000)
}

