import React, { useState } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

const options = ["자바", "스프링", "리액트", "리액트네이티브"];

function Select() {
  const [isOpen, setIsOpen] = useState(false); // 드롭다운 박스의 표시 여부
  const [selectedValue, setSelectedValue] = useState(options[0]); // 선택된 항목의 값

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen); // 드롭다운 박스의 표시 여부를 토글
  };

  const handleItemClick = (value) => {
    setSelectedValue(value); // 선택된 항목의 값을 설정
    setIsOpen(false); // 드롭다운 박스 닫기
  };

  const [isOpen2, setIsOpen2] = useState(false); // 드롭다운 박스의 표시 여부
  const [selectedValue2, setSelectedValue2] = useState(options[0]); // 선택된 항목의 값

  const handleDropdownToggle2 = () => {
    setIsOpen2(!isOpen2); // 드롭다운 박스의 표시 여부를 토글
  };

  const handleItemClick2 = (value) => {
    setSelectedValue2(value); // 선택된 항목의 값을 설정
    setIsOpen2(false); // 드롭다운 박스 닫기
  };

  const portalContainer = document.getElementById("portal-container"); // 포탈 컨테이너 DOM 요소

  return (
    <Container>
      <div>
        <SelectBox onClick={handleDropdownToggle}>{selectedValue}</SelectBox>
        {isOpen &&
          ReactDOM.createPortal(
            <OptionsBox>
              {options.map((item) => (
                <OptionBox onClick={() => handleItemClick(item)}>
                  {item}
                </OptionBox>
              ))}
            </OptionsBox>,
            portalContainer // 포탈 컨테이너 DOM 요소로 렌더링
          )}
      </div>

      <div>
        <SelectBox onClick={handleDropdownToggle2}>{selectedValue2}</SelectBox>
        {isOpen2 && (
          <OptionsBox2>
            {options.map((item) => {
              return (
                <OptionBox onClick={() => handleItemClick2(item)}>
                  {item}
                </OptionBox>
              );
            })}
          </OptionsBox2>
        )}
      </div>
    </Container>
  );
}

export default Select;

const Container = styled.div`
  display: flex;
  justify-content: middle;
`;

const SelectBox = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
  height: 25px;
  width: 180px;
  margin: 10px;
`;

const OptionsBox = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 180px;
  margin: 10px;
  z-index: 999;
  margin-top: -30px;
  background-color: white;
`;

const OptionsBox2 = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 180px;
  margin: 10px;
  background-color: white;
`;

const OptionBox = styled.div`
  padding: 5px;
  height: 25px;
  width: 95%;
`;

ReactDOM.render(<Select />, document.getElementById("root"));
