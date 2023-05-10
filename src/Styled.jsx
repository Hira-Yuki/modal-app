import styled, { keyframes } from "styled-components";

export const StLargePrimaryButton = styled.button`
  background-color: white;
  border: 3px solid hsl(171, 100%, 41%);
  border-radius: 5px;
  
  height: 65px;
  
  font-weight: bold;
  font-size: large;

  margin: 10px;
  padding: 10px;

  &:active {
    background-color: hsl(171, 100%, 41%);
  }
`;

export const StMediumPrimaryButton = styled(StLargePrimaryButton)`
  background-color: hsl(171, 100%, 41%);
  border: 0px;
  height: 50px;
  font-weight: normal;
  font-size: medium;

  &:active {
    background-color: hsl(171, 100%, 30%);
    border-color: hsl(171, 100%, 30%);
  }
`;

export const StSmallPrimaryButton = styled(StMediumPrimaryButton)`
  height: 40px;
  font-size: small;
`;

export const StLargeNegativeButton = styled(StLargePrimaryButton)`
  border: 3px solid hsl(348, 100%, 61%);
  color: hsl(348, 100%, 61%);

  &:active {
    background-color: hsl(348, 100%, 40%);
  }
`;

export const StMediumNegativeButton = styled(StLargeNegativeButton)`
  background-color: hsl(348, 100%, 61%);
  border: 3px solid hsl(348, 100%, 61%);
  height: 50px;
  font-weight: normal;
  font-size: medium;
  color: black;
`;

export const StSmallNegativeButton = styled(StLargeNegativeButton)`
  background-color: hsl(348, 100%, 61%);
  border: 0px;
  height: 40px;
  font-weight: normal;
  font-size: small;
  color: black;
`;

export const StInput = styled.input`
  border-color: blueviolet;
  border-radius: 6px;
  height: 20px;
  width: 300px;
`;

export const StSelectDiv = styled.div`
  border: 5px solid gray;
  overflow: hidden;
  height: 150px;
`;


// 모달 영역의 css 
const StModalShow = keyframes`
  from {
    opacity: 0;
    margin-top: -50px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
`;

const StModalBgShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const StModalWrapper = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);

  &.openModal {
    display: flex;
    align-items: center;
    animation: ${StModalBgShow} 0.3s;
  }
`;

export const StModalSection = styled.section`
  width: 90%;
  max-width: 450px;
  margin: 0 auto;
  border-radius: 0.3rem;
  background-color: #fff;
  animation: ${StModalShow} 0.3s;
  overflow: hidden;

  > header {
    position: relative;
    padding: 16px 64px 16px 16px;
    background-color: #f1f1f1;
    font-weight: 700;
  }

  > main {
    padding: 16px;
    border-bottom: 1px solid #dee2e6;
    border-top: 1px solid #dee2e6;
  }

  > footer {
    padding: 12px 16px;
    text-align: right;
  }
`;
