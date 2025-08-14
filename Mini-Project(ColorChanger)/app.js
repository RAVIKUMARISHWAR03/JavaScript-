let randomBtn = document.querySelector('.randomBtn')
let colorInput = document.querySelector('#colorInput')
let applyBtn = document.querySelector('.applyBtn')
let currentColorValue = document.querySelector('.currentColorValue')
let container = document.querySelector('.container')

console.log(randomBtn, currentColorValue,applyBtn,colorInput)
const colorArrays = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod"];

const generateRandomColor = () => {
    const randomColor = Math.floor(Math.random()*colorArrays.length)
    return colorArrays[randomColor]
}
const changeColor = (color) =>{
    container.style.backgroundColor = color ;
    currentColorValue.innerText = color

}


const handleRandomBtnClick = () => {
    let color = generateRandomColor();
    changeColor(color);
}
const handleApplyBtnClick = () => {
    const color = colorInput.value;
    changeColor(color);
}
randomBtn.addEventListener('click',handleRandomBtnClick)
applyBtn.addEventListener('click', handleApplyBtnClick)

