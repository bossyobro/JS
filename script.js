const nameOutput = document.getElementById("log");
const nameInput = document.getElementById("given-name");
const nameButton = document.getElementById("nameButton")
const colorOutput = document.getElementById("colorOutput");
const colorButton = document.getElementById("colorButton")
const colorInput = document.getElementById("color");

nameButton.addEventListener("click", () => {
  nameOutput.innerText = `Name: ${nameInput.value}`;
});

let errorColor = document.createElement('div')
document.body.appendChild(errorColor)

colorButton.addEventListener('click', buttonClick)

function buttonClick(){
    let color = colorInput.value
    let result = CSS.supports('color', color)

    if (result == true){
        document.body.style.backgroundColor = colorInput.value
        errorColor.innerText = ''
    } else {
        errorColor.innerText = 'This is not a valid color, please try again!'
    }
}


