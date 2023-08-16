// for all button toggle 
let clicked = false;

// for font styles 
document.getElementById('bold').addEventListener('click', function () {
    let textField = document.getElementById('text-field');
    
    if (clicked) {
        textField.style.fontWeight = 'normal';
    }
    else {
        textField.style.fontWeight = 'bold';
    }

    clicked = !clicked;
})
document.getElementById('italic').addEventListener('click', function () {
    let textField = document.getElementById('text-field');
    
    if (clicked) {
        textField.style.fontStyle = 'normal';
    }
    else {
        textField.style.fontStyle = 'italic';
    }

    clicked = !clicked;
})
document.getElementById('underline').addEventListener('click', function () {
    let textField = document.getElementById('text-field');
    
    if (clicked) {
        textField.style.textDecoration = 'none';
    }
    else {
        textField.style.textDecoration = 'underline';
    }

    clicked = !clicked;
})

// for alignments
document.getElementById('left-align').addEventListener('click',function(){
    let textField = document.getElementById('text-field');
    let leftBtn = document.getElementById('left-align');

    if (clicked) {
        textField.style.textAlign = 'left';
        leftBtn.classList.remove('selected');
    }
    else {
        textField.style.textAlign = 'left';
        leftBtn.classList.add('selected');
    }

    clicked = !clicked;
})
document.getElementById('center-align').addEventListener('click',function(){
    let textField = document.getElementById('text-field');
    let centerBtn = document.getElementById('center-align');
    if (clicked) {
        textField.style.textAlign = 'left';
        centerBtn.classList.remove('selected');
    }
    else {
        textField.style.textAlign = 'center';
        centerBtn.classList.add('selected');
    }

    clicked = !clicked;
})
document.getElementById('right-align').addEventListener('click',function(){
    let textField = document.getElementById('text-field');
    let rightBtn = document.getElementById('right-align');

    if (clicked) {
        textField.style.textAlign = 'left';
        rightBtn.classList.remove('selected');
    }
    else {
        textField.style.textAlign = 'right';
        rightBtn.classList.add('selected');
    }

    clicked = !clicked;
})
document.getElementById('justify').addEventListener('click',function(){
    let textField = document.getElementById('text-field');
    let justifyBtn = document.getElementById('justify');

    if (clicked) {
        textField.style.textAlign = 'left';
        justifyBtn.classList.remove('selected');
    }
    else {
        textField.style.textAlign = 'justify';
        justifyBtn.classList.add('selected');
    }

    clicked = !clicked;
})

// for font-size and colors 

document.getElementById('number-box').addEventListener('input',function(){
    let textField = document.getElementById('text-field');
    let textFieldValue = textField.value;
    let fontSize = document.getElementById('number-box');
    let fontSizeValue = fontSize.value;
    // console.log(textFieldValue);
    console.log(fontSizeValue + 'px');
    textField.style.fontSize = fontSizeValue + 'px';
})

document.getElementById('colorBox').addEventListener('input',function(){
    let colorBoxID = document.getElementById('colorBox');
    let textField = document.getElementById('text-field');
    let colorSelected = colorBoxID.value;
    console.log(colorSelected);
    textField.style.color = colorSelected;
})