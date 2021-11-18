const BOX = document.querySelectorAll(".box")
const PICTURE = document.querySelectorAll('.box-form')
const Conti = document.querySelectorAll('.container-right')

const BoxChingSize = () => {
    BOX.forEach((e) => {
        e.style.margin = "-15px"
    })
    Boxdef()
}

const Boxdef = () => {

    PICTURE.forEach((e) => {
        e.style.height = "83%"
        e.style.width = " 70%"

    })
}


/*
width: 91%;
height: 82%;
*/

