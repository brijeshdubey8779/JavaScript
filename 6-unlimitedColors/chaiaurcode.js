const randomColor = () => {
    const colorStr = "0123456789ABCDEF";
    let colorCode = '#';


    for (let i = 0; i < 6; i++) {
        let num = (Math.random().toFixed(1) * 16)
        colorCode += colorStr.charAt(num)
        document.querySelector('body').style.backgroundColor = colorCode
    }
    console.log(colorCode);
}


let colorInterval;
document.getElementById('start').addEventListener('click', () => colorInterval = setInterval(randomColor, 1000))
document.getElementById('stop').addEventListener('click', () => clearInterval(colorInterval))

