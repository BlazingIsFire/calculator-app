// Variables
var outcome = document.querySelector(".outcome-text");
let background = document.querySelector(".main-container");
let answer = "";
let mainButtons = Array.from(document.getElementsByClassName("main-numbers-btn"));
let mathButtons = Array.from(document.getElementsByClassName("side-bar-btn"));
let backgroundColors = Array.from(document.getElementsByClassName("color"));
let clearButton = document.querySelector(".clear-btn");
let equals = document.getElementById("equals");
let colorButton = document.querySelector(".color-btn");
let colorModal = document.querySelector(".color-modal-container");

// 0-9 Buttons listener
mainButtons.map( button => {
    button.addEventListener('click', e => {
        switch(e.target.innerText){
            default:
                outcome.innerHTML += e.target.innerText;
        }
    })
});

// Mathmatical Buttons listener
mathButtons.map( mathButton => {
    mathButton.addEventListener('click', e => {
        switch(e.target.innerText){
            case '=':
                try{
                    answer = eval(outcome.innerText);
                    outcome.innerHTML = answer;
                    break;
                } catch {
                    outcome.innerHTML = "Error!";
                    break;
                }
            default:
                outcome.innerHTML += e.target.innerText;
        }
    })
})

// Clear & Color button listeners
clearButton.addEventListener('click', e => {
    outcome.innerHTML = "";
    answer = "";
});

colorButton.onclick = () => {
    colorModal.style.display = "flex";   
}

window.onclick = (e) => {
    if (e.target == colorModal) {
        colorModal.style.display = "none";
    }
}
// Background color changer
backgroundColors.map( color => {
    color.addEventListener('click', e => {
        switch(e.target.id){
            case 'red':
                background.style.backgroundColor = "#ff0000";
                break;
            case 'yellow':
                background.style.backgroundColor = '#ffff00';
                break;
            case 'green':
                background.style.backgroundColor = '#00ff00';
                break;
            case 'cyan':
                background.style.backgroundColor = '#00ffff';
                break;
            case 'blue':
                background.style.backgroundColor = '#0000ff';
                break;
            case 'pink':
                background.style.backgroundColor = '#ff00ff';
                break;
        }
    })
});