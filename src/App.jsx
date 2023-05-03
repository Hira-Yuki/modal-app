import { useState } from "react";
import "./App.css";
import styled from "styled-components";

const StLargePrimaryButton = styled.button`
  background-color: white;
  border: 3px solid hsl(171, 100%, 41%);
  border-radius: 5px;

  height: 65px;

  font-weight: bold;
  font-size: large;

  margin: 10px;
  padding: 10px;
`;

const StMediumPrimaryButton = styled(StLargePrimaryButton)`
  background-color: hsl(171, 100%, 41%);
  border: 0px;
  height: 50px;
  font-weight: normal;
  font-size: medium;
`;

const StSmallPrimaryButton = styled(StLargePrimaryButton)`
  background-color: hsl(171, 100%, 41%);
  border: 0px;
  height: 40px;
  font-weight: normal;
  font-size: small;
`;

const StLargeNegativeButton = styled(StLargePrimaryButton)`
  border: 3px solid hsl(348, 100%, 61%);
  color: hsl(348, 100%, 61%);
`;

const StMediumNegativeButton = styled(StLargeNegativeButton)`
  background-color: hsl(348, 100%, 61%);
  border: 3px solid hsl(348, 100%, 61%);
  height: 50px;
  font-weight: normal;
  font-size: medium;
  color: black;
`;

const StSmallNegativeButton = styled(StLargeNegativeButton)`
  background-color: hsl(348, 100%, 61%);
  border: 0px;
  height: 40px;
  font-weight: normal;
  font-size: small;
  color: black;
`;

const StInput = styled.input`
  border-color: blueviolet;
  border-radius: 6px;
  height: 20px;
  width: 300px;
`;

const StSelectDiv = styled.div`
  border: 5px solid gray;
  overflow: hidden;
`;

function App() {
  // 입력을 받을 상태값
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");

  const onAlertHandler = () => {
    alert("버튼을 누르면 알럿으로 알립니다.");
  };

  const onPromptHandler = () => {
    prompt("문자열 입력 받기");
  };

  // 값이 변경되면 저장하는 함수, 천단위마다 ','를 입력함
  const priceChangeHandler = function (event) {
    let inputPrice = event.target.value;
    // Intl.NumberFormat().format는 숫자만 받을 수 있기 때문에 입력될 때마다 ','를 제거하고 다시 연산해야함.
    inputPrice = Number(inputPrice.replaceAll(",", ""));
    // // 값이 NaN이 될 경우 setPrice를 진행하지 않고 함수를 종료함 따라서 값이 저장되지 않아 입력되지 않음.
    if (isNaN(inputPrice)) return;
    setPrice(new Intl.NumberFormat().format(inputPrice));
  };

  const nameChangeHandler = function (event) {
    const inputName = event.target.value;
    setName(inputName);
  };

  const onSubmitHandler = () => {
    const getPrice = Number(price.replaceAll(",", ""));
    alert(`{name: ${name}}, price: ${getPrice}}`);
  };

  return (
    <div>
      <h2>Button</h2>
      <div>
        <StLargePrimaryButton onClick={onAlertHandler}>
          Large Primary Button▹
        </StLargePrimaryButton>
        {/* 버튼 안에 이미지는 <div> 또는 <img>를 활용해서 넣을 수 있다. */}
        <StMediumPrimaryButton>Medium</StMediumPrimaryButton>
        <StSmallPrimaryButton>Small</StSmallPrimaryButton>
      </div>
      <div>
        <StLargeNegativeButton onClick={onPromptHandler}>
          Large Negative Button☠︎
        </StLargeNegativeButton>
        {/* 버튼 안에 이미지는 <div> 또는 <img>를 활용해서 넣을 수 있다. */}
        <StMediumNegativeButton>Medium</StMediumNegativeButton>
        <StSmallNegativeButton>Small</StSmallNegativeButton>
      </div>
      <h2>Input</h2>
      <div>
        이름 : <StInput type="text" value={name} onChange={nameChangeHandler} />{" "}
        가격 :{" "}
        <StInput type="text" value={price} onChange={priceChangeHandler} />{" "}
        <StSmallPrimaryButton onClick={onSubmitHandler}>
          저장
        </StSmallPrimaryButton>
      </div>
      <h2>Modal</h2>
      <div>
        <StMediumPrimaryButton>open modal</StMediumPrimaryButton>{" "}
        <StMediumNegativeButton>open modal</StMediumNegativeButton>
      </div>
      <StSelectDiv>
        <h2>Select</h2>
        <div>
          <div>
            <select>
              <option>자바스크립트</option>
              <option>리엑트</option>
              <option>리엑트 네이티브</option>
              <option>스프링</option>
            </select>
          </div>
          <div>
            <select>
              <option>자바스크립트</option>
              <option>리엑트</option>
              <option>리엑트 네이티브</option>
              <option>스프링</option>
            </select>
          </div>
        </div>
      </StSelectDiv>
    </div>
  );
}

export default App;