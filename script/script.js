let time = 4000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#banner img")
    max = images.length;

function nextImage() {
    
    images[currentImageIndex].classList.remove("imgone")
    currentImageIndex++
    if(currentImageIndex >= max)
        currentImageIndex = 0
    images[currentImageIndex].classList.add("imgone")
}

function start() {
    setInterval(() => {
        nextImage()
    }, time)
}

window.addEventListener("load", start)

const button = document.querySelector(".popClose")
const popup = document.querySelector("#popupWrapper")

button.addEventListener("click", () => {
    popup.style.display = "none"
})

const send = document.querySelector(".buttonPop")
const popupSend = document.querySelector("#popupWrapper")

send.addEventListener("click", () => {
    popupSend.style.display = "none"
})
