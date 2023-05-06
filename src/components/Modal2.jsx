import React from "react";
import * as S from "../Styled";

function Modal2(props) {
  const { open, close, header } = props;

  const handleOverlayClick = (event) => {
    // 오버레이를 클릭한 경우에만 모달을 닫도록 처리합니다.
    if (event.target === event.currentTarget) {
      close();
    }
  };

  const handleCloseClick = (event) => {
    event.stopPropagation();
    close();
  };

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <S.StModalWrapper
      className={open ? "openModal modal" : "modal"}
      onClick={handleOverlayClick}
    >
      {open ? (
        <S.StModalSection onClick={(e) => e.stopPropagation()}>
          <header>{header}</header>
          <main>{props.children}</main>
          <footer>
            <S.StMediumNegativeButton
              className="close"
              onClick={handleCloseClick}
            >
              닫기
            </S.StMediumNegativeButton>
          </footer>
        </S.StModalSection>
      ) : null}
    </S.StModalWrapper>
  );
}

export default Modal2;
