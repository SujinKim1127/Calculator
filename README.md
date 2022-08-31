# Calculator
Flexbox 속성을 사용해서 와이어프레임을 구성한 후 계산기능넣기


## 실행영상
![작동영상](https://user-images.githubusercontent.com/58413633/187672697-47fac23b-f9bb-4be0-8ecf-905bbb0144f8.gif)

## flex 기능
```css
.container{
    border-radius: 10px;
    height: 330px;
    padding: 10px 20px;
    margin-top: 30px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

```
`display: flex;` 선언 후 

`justify-content: center;` : 를 사용하여 축 수평방향을 중앙으로 정렬 ,

`align-items: center;` : 를 사용하여로 축 수직방향을 중앙으로 정렬

    
## 디자인
```css
  button:active {
    box-shadow: 1px 1px 0 rgba(117, 216, 203, 0.514);
    position: relative;
    top: 2px;
    color: #32978a;
  }
  
  button:hover {
    background-color: rgb(76, 235, 187);
  }
```
`:active` 를 사용하여 버튼을 눌렀을때 아래로 2px 만큼 내려가고 글씨 색상 변화

`:hover` 를 사용하여 마우스가 버튼 위를 지나갈때 색 변화

    

## JavaScript 코드
```javascript
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
        /* 윗부분과 동일해서 생략 */
        previousKey += buttonContent;
        console.log("previousKey: " + previousKey);
      }
    }
```
첫번째값을 넣을때와 두번째값을 넣을때를 `previousKey`의 값이 s 인지 아닌지로 구분하여

각각의 경우에서 처음입력할때, 앞에 숫자가 있을때, 0 입력후 숫자 입력시 0이 인식되지않는 경우로 나누었다.


```javascript
    if (action === 'operator') {
      operator.textContent = buttonContent;
      firstNum = Number(previousKey);         // 입력한 값을 저장해주고
      previousKey = "s";                       // 입력한 값을 s로 초기화
      console.log("firstNum: " + firstNum);
      previousNum=0;
    }   
```
`firstNum`변수에 첫번째 입력값을 저장하고 `previousKey = 's'`로 만들어서 두번째값을 입력한다는 신호를 알려주고 `previousNum`을 초기화 시켜준다.

