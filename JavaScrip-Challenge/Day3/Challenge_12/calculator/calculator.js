// 숫자 입력 -> 숫자1 변수에 저장
// 연산자 입력 -> 연산자 변수에 저장
// 숫자 입력 -> 숫자2 변수에 저장
// = : 계산 -> 계산 결과 출력, C : 초기화 -> 입력 값 초기화

let numFirst = '';  // 숫자1
let numSecond = '';  // 숫자2
let operator = ''; // 입력된 연산자

const displayEl = document.querySelector('.input');

// 숫자를 입력 받는 함수
const inputNum = (n) => {
    return () => {
        if(operator === ''){
            numFirst = numFirst + n;
            displayEl.value = numFirst;
        }else{
            numSecond = numSecond + n;
            displayEl.value = numSecond;
        }
    };
};

// 연산자를 입력 받는 함수
const inputOp = (op) => () => {
    switch(op){
        case '+':
        case '-':
        case 'x':
        case '÷':
            operator = op;
            displayEl.value = operator;
            break;
        case '=':
            // 계산 결과
            switch(operator){
                case '+':
                    displayEl.value = parseInt(numFirst) + parseInt(numSecond);
                    break;
                case '-':
                    displayEl.value = parseInt(numFirst) - parseInt(numSecond);
                    break;
                case 'x':
                    displayEl.value = parseInt(numFirst) * parseInt(numSecond);
                    break;
                case '÷':
                    displayEl.value = parseInt(numFirst) / parseInt(numSecond);
                    break;
            }
            break;
        case 'C':
            // 초기화
            numFirst = '';
            numSecond = '';
            operator = '';
            displayEl.value = '';
            break;
    }
};

document.querySelector('#num_0').addEventListener('click', inputNum('0'));
document.querySelector('#num_1').addEventListener('click', inputNum('1'));
document.querySelector('#num_2').addEventListener('click', inputNum('2'));
document.querySelector('#num_3').addEventListener('click', inputNum('3'));
document.querySelector('#num_4').addEventListener('click', inputNum('4'));
document.querySelector('#num_5').addEventListener('click', inputNum('5'));
document.querySelector('#num_6').addEventListener('click', inputNum('6'));
document.querySelector('#num_7').addEventListener('click', inputNum('7'));
document.querySelector('#num_8').addEventListener('click', inputNum('8'));
document.querySelector('#num_9').addEventListener('click', inputNum('9'));

document.querySelector('#add').addEventListener('click', inputOp('+'));
document.querySelector('#subtract').addEventListener('click', inputOp('-'));
document.querySelector('#multiply').addEventListener('click', inputOp('x'));
document.querySelector('#divide').addEventListener('click', inputOp('÷'));
document.querySelector('#clear').addEventListener('click', inputOp('C'));
document.querySelector('#result').addEventListener('click', inputOp('='));