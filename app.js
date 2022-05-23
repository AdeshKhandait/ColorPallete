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

        //  Contrast check of inner text of h2
        checkContrast(randomColor,hexText);

        // Initial Colorize Sliders
        const color = chroma(randomColor);
        const sliders = div.querySelectorAll(".sliders input");
        const hue = sliders[0];
        const brightness = sliders[1];
        const saturation = sliders[2];

        // function to colorize all sliders
        colorizeSliders(color,hue,brightness,saturation);
    }); 
}

// Contrast Checker for inner text
function checkContrast (color, text) {
    const luminance = chroma(color).luminance();
    if (luminance > 0.5) {
        text.style.color = "black";
    } else {
        text.style.color = "white";
    }
}

// Function to Colorize the slider 
function colorizeSliders (color,hue,brightness,saturation) {
    // Scale saturation
    const noSat = color.set("hsl.h",0);
    const fullSat = color.set("hsl.h",1);
    const scaleSat = chroma.scale([noSat, color, fullSat]);
    console.log(saturation);

    // Scale Brightness
    const midBright = color.set("hsl.l", 0.5);
    const scaleBright = chroma.scale(["white", midBright, "black"]);


    // Update input
    // Saturation 
    saturation.style.backgroundImage = `linear-gradient(to right,${scaleSat(0)}, ${scaleSat(1)})`;
    // Brightness
    brightness.style.backgroundImage = `linear-gradient(to right,${scaleBright(0)},${scaleBright(0.5)}, ${scaleBright(1)})`;
    // Hue
    hue.style.backgroundImage = `linear-gradient(to right, rgb(204,75,75),rgb(204,204,75),rgb(75,204,75),rgb(75,204,204),rgb(75,75,204),rgb(204,75,204),rgb(204,75,75))`;

}


randomColors();