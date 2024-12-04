/*document.addEventListener("DOMContentLoaded", function (){
    const testDiv = document.getElementById("test-div")
    console.log(testDiv)
})

document.addEventListener("DOMContentLoaded", () =>{
    const testDiv = document.getElementById("test-div")
    console.log(testDiv)
})

function loadDiv(){
    const testDiv = document.getElementById("test-div")
    console.log(testDiv)
}
document.addEventListener("DOMContentLoaded", loadDiv)

const loadDiv2 = () =>{
    const testDiv = document.getElementById("test-div")
    console.log(testDiv)
}

document.addEventListener("DOMContentLoaded", loadDiv2)

const loadDiv3 = function () {
    const testDiv = document.getElementById("test-div")
    console.log(testDiv)
}

document.addEventListener("DOMContentLoaded", loadDiv3)*/


const animatedText = (element) => {
    let style = window.getComputedStyle(element, null).getPropertyValue("font-size");
    let zmenaVelikost = parseFloat(style);
    let boolHodnota = true; // dal jsem si zde boolean proměnnou, která bude říkat jestli slovo roste nebo ne

    setInterval(() => {
        const col = () => {
            return Math.floor(Math.random() * 255);
        } // jednoduchý algoritmus pro náhodnou hodnotu v rozsahu 0-255 (použití pro RGB hodnoty)
        const color = "rgb(" + col() + "," + col() + "," + col() + ")";

        if (boolHodnota==true) {
            zmenaVelikost += 1;
            element.textContent = zmenaVelikost + " px";
            if (zmenaVelikost >= 100) {
                boolHodnota = false;
                element.style.color = color;
            }
        } else {
            zmenaVelikost -= 1;
            element.textContent = zmenaVelikost + " px";
            if (zmenaVelikost <= 16) {
                boolHodnota = true;
                element.style.color = color;
            }
        }
        element.style.fontSize = zmenaVelikost + "px";
    }, 75);
};

const modifyDiv = () => {
    const testDiv = document.getElementById("test-div")
    testDiv.style.color = "red";
    testDiv.style.fontSize = "16px";
    testDiv.style.fontFamily = "Arial";

    animatedText(testDiv)
};

document.addEventListener("DOMContentLoaded", modifyDiv);
