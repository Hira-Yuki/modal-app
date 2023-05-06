import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import * as S from "./Styled"

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
    let inputPrice = event.target.value.replace(/,/g, "");

    // Intl.NumberFormat().format는 숫자만 받을 수 있기 때문에 입력될 때마다 ','를 제거하고 다시 연산해야함.
    inputPrice = parseInt(inputPrice);
    // // 값이 NaN이 될 경우 setPrice를 진행하지 않고 함수를 종료함 따라서 값이 저장되지 않아 입력되지 않음.
    if (!/^\d+$/.test(inputPrice)) return;

    const savePrice = new Intl.NumberFormat().format(inputPrice)
    setPrice(savePrice);
  };

  const nameChangeHandler = function (event) {
    const inputName = event.target.value;
    setName(inputName);
  };

  const onSubmitHandler = () => {
    if (price){
      const getPrice = Number(price.replaceAll(",", ""));
      // 아무값도 없을 때 오류 발생하는 것 해결하기.
      alert(`{name: ${name}}, price: ${getPrice}}`);
    } else {
      alert(`{name: ${name}}, price: ${price}}`);
    }
  };

  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h2>Button</h2>
      <div>
        <S.StLargePrimaryButton onClick={onAlertHandler}>
          Large Primary Button▹
        </S.StLargePrimaryButton>
        {/* 버튼 안에 이미지는 <div> 또는 <img>를 활용해서 넣을 수 있다. */}
        <S.StMediumPrimaryButton>Medium</S.StMediumPrimaryButton>
        <S.StSmallPrimaryButton>Small</S.StSmallPrimaryButton>
      </div>
      <div>
        <S.StLargeNegativeButton onClick={onPromptHandler}>
          Large Negative Button☠︎
        </S.StLargeNegativeButton>
        {/* 버튼 안에 이미지는 <div> 또는 <img>를 활용해서 넣을 수 있다. */}
        <S.StMediumNegativeButton>Medium</S.StMediumNegativeButton>
        <S.StSmallNegativeButton>Small</S.StSmallNegativeButton>
      </div>
      <h2>Input</h2>
      <div>
        이름 <S.StInput type="text" value={name} onChange={nameChangeHandler} />
        가격 <S.StInput type="text" value={price} onChange={priceChangeHandler} />
        <S.StSmallPrimaryButton onClick={onSubmitHandler}>
          저장
        </S.StSmallPrimaryButton>
      </div>
      <h2>Modal</h2>
      <div>
        <S.StMediumPrimaryButton onClick={openModal}>open modal</S.StMediumPrimaryButton>
        <Modal open={modalOpen} close={closeModal} header="첫번째 모달이에요">
          1번 모달의 내용
        </Modal>
        <S.StMediumNegativeButton>open modal</S.StMediumNegativeButton>
      </div>
      <S.StSelectDiv>
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
      </S.StSelectDiv>
    </div>
  );
}

export default App;