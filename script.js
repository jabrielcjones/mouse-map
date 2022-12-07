const body = document.querySelector("body")
document.addEventListener("mousemove", function(e) {
    // console.log(`${e.pageX} ${e.pageY}`)
    portionOfWidth = e.pageX / window.innerWidth
    portionOfHeight = e.pageY / window.innerHeight

    r = Math.round(255 * portionOfWidth)
    b = Math.round(255 * portionOfHeight)

    body.style.backgroundColor = `rgb(${r}, 0, ${b})`
    console.log(`${r} 0 ${b}`)
})
