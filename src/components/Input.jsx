import React from "react";
import { useState } from "react";
import * as S from "../Styled";
/* global BigInt */




function Input() {
  // 입력을 받을 상태값
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");

  // 값이 변경되면 저장하는 함수, 천단위마다 ','를 입력함
  const priceChangeHandler = function (event) {
    let inputPrice = event.target.value.replace(/,/g, "");

    if (!inputPrice) { // 입력된 값이 없을 경우 0으로 초기화
        setPrice("0");
        return;
      }

    // 입력값을 검사하여 숫자가 아닌 경우 함수를 종료 = 숫자만 입력 가능
    if (!/^\d+$/.test(inputPrice)) return; 

    const newPrice = BigInt(inputPrice).toLocaleString();
    setPrice(newPrice);
  };

  const nameChangeHandler = function (event) {
    const inputName = event.target.value;
    setName(inputName);
  };

  const onSubmitHandler = () => {
    if (price) {
      const getPrice = BigInt(price.replaceAll(",", ""));
      // 값이 없을 때 오류 발생하는 것 해결하기.
      alert(`{name: ${name}}, price: ${getPrice}}`);
    } else {
      alert(`{name: ${name}}, price: ${price}}`);
    }
  };

  return (
    <div>
      <h2>Input</h2>
      <div>
        이름 :
        <S.StInput type="text" value={name} onChange={nameChangeHandler} />
        가격 :
        <S.StInput type="text" value={price} onChange={priceChangeHandler} />
        <S.StSmallPrimaryButton onClick={onSubmitHandler}>
          저장
        </S.StSmallPrimaryButton>
      </div>
    </div>
  );
}

export default Input;
