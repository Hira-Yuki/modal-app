import React from "react";
import { useState } from "react";
import * as S from "../Styled";

function Input() {
  // 입력을 받을 상태값
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");

  // 값이 변경되면 저장하는 함수, 천단위마다 ','를 입력함
  const priceChangeHandler = function (event) {
    let inputPrice = event.target.value.replace(/,/g, "");

    // Intl.NumberFormat().format는 숫자만 받을 수 있기 때문에 입력될 때마다 ','를 제거하고 다시 연산해야함.
    inputPrice = parseInt(inputPrice);
    // // 값이 NaN이 될 경우 setPrice를 진행하지 않고 함수를 종료함 따라서 값이 저장되지 않아 입력되지 않음.
    if (!/^\d+$/.test(inputPrice)) return;

    const savePrice = new Intl.NumberFormat().format(inputPrice);
    setPrice(savePrice);
  };

  const nameChangeHandler = function (event) {
    const inputName = event.target.value;
    setName(inputName);
  };

  const onSubmitHandler = () => {
    if (price) {
      const getPrice = Number(price.replaceAll(",", ""));
      // 아무값도 없을 때 오류 발생하는 것 해결하기.
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
