const calculator = document.querySelector('.calculator'); 
const buttons = calculator.querySelector('.calculator__buttons'); 

const firstOperend = document.querySelector('.calculator__operend--left'); 
const operator = document.querySelector('.calculator__operator'); 
const secondOperend = document.querySelector('.calculator__operend--right'); 
const calculatedResult = document.querySelector('.calculator__result'); 

function calculate(n1, operator, n2) {
  let result = 0;
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  if(operator === "+"){
    result = Number(n1) + Number(n2);
    console.log(result);
  }
  else if(operator === "-"){
    result = Number(n1) - Number(n2);
  }
  else if(operator === "*"){
    result = Number(n1) * Number(n2);
  }
  else if(operator === "/"){
    result = Number(n1) / Number(n2);
  }
  return String(result);
}

buttons.addEventListener('click', function (event) {
  const target = event.target; 
  const action = target.classList[0]; 
  const buttonContent = target.textContent; 


  if (target.matches('button')) {
    // 클릭된 HTML 엘리먼트가 button이면
    if (action === 'number') {
      if(firstOperend.textContent === "0"){
        firstOperend.textContent = buttonContent;
      }      
      else if (firstOperend.textContent !== "0") {
        secondOperend.textContent = buttonContent;
      }
      console.log('숫자 ' + buttonContent + ' 버튼');
    }

    if (action === 'operator') {
      operator.textContent = buttonContent;
      console.log('연산자 ' + buttonContent + ' 버튼');
    }

    if (action === 'decimal') {
      console.log('소수점 버튼');
    }

    if (action === 'clear') {
      firstOperend.textContent = "0";
      secondOperend.textContent = "0";
      operator.textContent = "+";
      calculatedResult.textContent = "0";
      console.log('초기화 버튼');
    }

    if (action === 'calculate') {
      calculatedResult.textContent = calculate(firstOperend.textContent, operator.textContent, secondOperend.textContent);
      console.log('계산 버튼');
    }
  }
});



const display = document.querySelector('.calculator__display--for-advanced'); 
let firstNum, operatorForAdvanced="", previousKey = "", previousNum=0;

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target;
  const action = target.classList[0]; 
  const buttonContent = target.textContent; 

  if (target.matches('button')) {
    if (action === 'number') {
      // 아무것도 없을때 입력
      // second 값 넣기
      if(previousKey === "s"){
        if(display.textContent !== 0 && previousNum === 0 && buttonContent !== "0"){
          display.textContent = buttonContent;
          previousNum = display.textContent;
          console.log("previousNum: " + previousNum);
        }
        else if(previousNum !== 0){       // 앞에 숫자가 있을때
          console.log("앞에 키가 입력됨");
          display.textContent += buttonContent;
        }
        else if(buttonContent === "0") {  // 07 입력시 7로 입력받기
          console.log("07 입력시 7 입력되도록");
          display.textContent = 0;
        }
        operatorForAdvanced += buttonContent;
        console.log("oFA: " + operatorForAdvanced);
      }
      else{
        if(display.textContent !== 0 && previousNum === 0 && buttonContent !== "0" && previousKey !== "s"){
          display.textContent = buttonContent;
          previousNum = display.textContent;
          console.log("previousNum: " + previousNum);
        }
        else if(previousNum !== 0){       // 앞에 숫자가 있을때
          console.log("앞에 키가 입력됨");
          display.textContent += buttonContent;
        }
        else if(buttonContent === "0") {  // 07 입력시 7로 입력받기
          console.log("07 입력시 7 입력되도록");
          display.textContent = 0;
        }
        previousKey += buttonContent;
        console.log("previousKey: " + previousKey);
      }
    
    }
    if (action === 'operator') {
      operator.textContent = buttonContent;
      firstNum = Number(previousKey);         // 입력한 값을 저장해주고
      previousKey = "s";                       // 입력한 값을 s로 초기화
      console.log("firstNum: " + firstNum);
      previousNum=0;
    }
    if (action === 'decimal') {}
    if (action === 'clear') {
      display.textContent = 0;
      previousKey = "";
      previousNum = 0;
      firstNum=0;
      operatorForAdvanced="";
    }
    if (action === 'calculate') {
      if(operatorForAdvanced === 0){
        display.textContent = 0;
      }
      else{
      display.textContent = calculate(firstNum, operator.textContent, Number(operatorForAdvanced));
      }
    }
  }

});
