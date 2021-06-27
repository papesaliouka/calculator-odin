const numbers = Array.from(document.querySelectorAll('.num'));
const operators = Array.from(document.querySelectorAll('.specials > button'));
const screen = document.querySelector('.screen');
const clearBtn = document.getElementById('clear');

//initiale variable
let text = '';
let operated = false;
let value1 = 0;
let value2 = 0;
let type = '';



// operations
const add = (num1,num2) => num1 + num2;
const substract = (num1,num2) => num1 - num2;
const multiply = (num1,num2) => num1 * num2;
const divide = (num1,num2) => num1 / num2;

// call on operation with num1 and num2;
const operate = (num1, num2, func) =>{
    let result =func(num1,num2);
    return screen.textContent= result
}

//populate the display;
const populateDisplay = (pad) =>{
    if(!operated){
        text+= pad
    }else{
        text = '';
        operated = !operated;
        text+=pad
    }
    return screen.textContent = text;    
};


// Clear everything
const clear=()=> {
    screen.textContent='0';
    text = '';
    operated=false;
    value2=0,value=0,type=''
}

//even listener
numbers.forEach(button=> button.addEventListener('click', (e)=> populateDisplay(e.target.textContent)));
operators.forEach(operator => operator.addEventListener('click', (e)=>{
    operated = !operated;
    if(value1 == 0 && value2==0){
        value1 = Number(text);
        let sign = e.target.textContent;
        type = sign;
        return
    }else if(value1 !=0 && value2==0){
        value2 = Number(text);
       type =='+' ? operate(value1, value2, add) : type=='-' ? operate(value1, value2, substract) : type=='/' ?operate(value1, value2, divide) : type=='x' ? operate(value1, value2, multiply) : null;
        value1=0, value2=0, type = ''
        return
    }
}))
clearBtn.addEventListener('click', clear);
