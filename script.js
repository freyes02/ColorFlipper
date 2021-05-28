
const btn = document.getElementById('btn');
const color = document.querySelector(".color")

btn.addEventListener('click',function(){
    const red = getRandomNumber();
    const blue = getRandomNumber();
    const green = getRandomNumber();
    let colors = "rgb(" + red + "," + green + "," + blue + ")"
    document.body.style.backgroundColor = colors
    color.textContent = colors
});

function getRandomNumber(){
    return Math.floor(Math.random() * 255);
}