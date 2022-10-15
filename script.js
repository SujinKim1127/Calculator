const calculator = document.querySelector('.calculator'); 
const buttons = calculator.querySelector('.calculator__buttons'); 

const firstOperend = document.querySelector('.calculator__operend--left');
const operator = document.querySelector('.calculator__operator'); 
const secondOperend = document.querySelector('.calculator__operend--right'); 
const calculatedResult = document.querySelector('.calculator__result'); 

function calculate(n1, operator, n2) {
  let result = 0;
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
  const target = event.target; // 클릭된 HTML 엘리먼트의 정보
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보

  if (target.matches('button')) {
    if (action === 'number') {
      if(firstOperend.textContent === "0"){
        firstOperend.textContent = buttonContent;
      }      
      else if (firstOperend.textContent !== "0") {
        secondOperend.textContent = buttonContent;
      }
    }

    if (action === 'operator') {
      operator.textContent = buttonContent;
    }

    if (action === 'clear') {
      firstOperend.textContent = "0";
      secondOperend.textContent = "0";
      operator.textContent = "+";
      calculatedResult.textContent = "0";
    }

    if (action === 'calculate') {
      calculatedResult.textContent = calculate(firstOperend.textContent, operator.textContent, secondOperend.textContent);
    }
  }
});



const display = document.querySelector('.calculator__display--for-advanced'); 
let firstNum, operatorForAdvanced="", previousKey = "", previousNum=0;
var cnt = 0;
var op = 0;
var point = 0;

buttons.addEventListener('click', function (event) {
  const target = event.target; // 클릭된 HTML 엘리먼트의 정보
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보

  if (target.matches('button')) {
    if (action === 'number') {
      // 아무것도 없을때 입력
      // second 값 넣기
      if(previousKey === "s"){
        console.log("2222222222222222222222222")
        if(display.textContent[0] === '.') {
          console.log('second point')
          display.textContent += buttonContent;
        }
        if(display.textContent !== 0 && previousNum === 0 && buttonContent !== "0" && display.textContent[0] !== '.'){
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
        if(point > 0){
          operatorForAdvanced = Number(display.textContent);
        }
        else{
          operatorForAdvanced += buttonContent;
        }
        console.log("oFA: " + operatorForAdvanced);
      }
      else{
        previousKey += buttonContent;

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
        if(point > 0){
          console.log('소수점');
          previousKey = Number(display.textContent);
        }
        console.log("after pin " + display.textContent);
        console.log("previousKey: " + previousKey);
        console.log("oFA: " + operatorForAdvanced);

      }
    
    }

    if (action === 'operator') {
      operator.textContent = buttonContent;
      console.log("previouskey: " + previousKey);
      if(previousKey !== "s"){    // 연산자 버튼이 연속해서 눌리는거 방지
        firstNum = Number(previousKey);         // 입력한 값을 저장해주고
        previousKey = "s";                       // 입력한 값을 s로 초기화
        console.log("opfirstNum: " + firstNum);
        previousNum=0;
      }
      point = 0;
      console.log("oFA: " + operatorForAdvanced);
    }

    if (action === 'decimal') {
      // 여러번 눌리는거 방지
      if(point === 0) display.textContent += ".";
      if(previousNum === 0) display.textContent = '.';
      point++;
    }

    if (action === 'clear') {
      display.textContent = 0;
      previousKey = "";
      previousNum = 0;
      firstNum=0;
      operatorForAdvanced="";
      cnt = 0;
      point = 0;
    }

    if (action === 'calculate') {
      cnt++;
      console.log("cnt: " + cnt);
      console.log(typeof(display.textContent));
      console.log("oFA: " + operatorForAdvanced);
      if(operatorForAdvanced === 0){
        display.textContent = 0;
      }
      else if(cnt > 1){
        display.textContent = calculate(Number(display.textContent), operator.textContent, Number(operatorForAdvanced));
      }
      else if(previousKey === "s" && operatorForAdvanced === "") display.textContent = calculate(firstNum, operator.textContent, firstNum);
      else{
        display.textContent = calculate(firstNum, operator.textContent, Number(operatorForAdvanced));
      }
    }
  }

});
