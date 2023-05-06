import React from "react";
import * as S from "../Styled";

function Button() {
  const onAlertHandler = () => {
    alert("버튼을 누르면 알럿으로 알립니다.");
  };

  const onPromptHandler = () => {
    prompt("문자열 입력 받기");
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
    </div>
  );
}

export default Button;
