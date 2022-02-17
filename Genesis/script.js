let order = [];
let clickedOder = [];
let score = 0;

//0 - yellow
//1 - blue
//2 - red
//3 - green
// Criando as constantes das classes (cores)
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');


// Criando a ordem variada de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        ligthColor(elementColor, Number(i) + 1)
    }
}
// Acende a proxima cor
let ligthColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}
// Checa se os botões clicados são os mesmos da ordem gerado no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando o proximo nivel.`);
        nexLevel();
    }
}

// funçao do click do usuario
let click = (color) => {
    clickedOder[clickedOder.length] = color;
    createColorElement(color).classList.add('selected');
    
    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

// funçao que retorna a cor
let createColorElement = (color) => {
    if (color == 0) {
        return yellow;
    }
    else if (color == 1) {
        return blue;
    }
    else if (color == 2) {
        return red;
    }
    else if (color == 3) {
        return green;
    }
}

//Função para o proximo nivel
let nexLevel = () => {
    score++;
    shuffleOrder();
}

//Função para Game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nGame Over\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOder = [];

    playGame();
}
//Função de inicio do jogo
let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando um novo jogo.');
    score = 0;

    nexLevel();
}

//Eventos de clique para as cores
yellow.oneclick = () => click(0);
blue.oneclick = () => click(1);
red.oneclick = () => click(2);
green.oneclick = () => click(3);

//Incio do jogo
playGame();