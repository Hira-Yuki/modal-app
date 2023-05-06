import React from "react";
import * as S from "../Styled"

function Modal(props) {
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <S.StModalWrapper className={open ? "openModal modal" : "modal"}>
      {open ? (
        <S.StModalSection>
          <header>
            {header}
          </header>
          <main>{props.children}</main>
          <footer>
            <S.StMediumNegativeButton className="close" onClick={close}>
              취소
            </S.StMediumNegativeButton>
            <S.StMediumPrimaryButton>
              확인
            </S.StMediumPrimaryButton>
          </footer>
        </S.StModalSection>
      ) : null}
    </S.StModalWrapper>
  );
}

export default Modal;
