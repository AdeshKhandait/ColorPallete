// Global Selection and Variables
const colorDivs = document.querySelectorAll('.color');
const generateBtn = document.querySelector('.generate');
const sliders = document.querySelectorAll('input[type="range"]');
const currentHexes = document.querySelector('.color h2');
let initalColors;
// Functions

// Hex Generator or Color Generator
function generateHex() {
// This will generate random hex without library 
    // const letters = "0123456789ABCDEF";
    // let hash = "#";
    // for ( let i = 0 ; i < 6 ; i++) {
    //     hash += letters[Math.floor(Math.random() * 16)];
    // }
    // return hash;

// using chroma js library
    const hexColor = chroma.random();
    return hexColor; 
}

// Generating the background for each divs
function randomColors() {

    colorDivs.forEach((div,index) => {
        const hexText = div.children[0];
        const randomColor = generateHex();
    
    // Adding the color to background
        div.style.background = randomColor;
        hexText.innerText = randomColor;
    }); 
}

randomColors();