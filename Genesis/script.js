let order = [];
let clickedOder = [];
let score = 0;

//0 = yellow
//1 = blue
//2 = red
//3 = green

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        ligthColor(elementColor, Numbet(i) + 1)
    }
}

let ligthColor = (element, number) => {
    number = number * 500 ;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number - 250);
}