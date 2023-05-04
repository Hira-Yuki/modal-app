import styled from "styled-components";

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
    background-color: green;
  }
`;

export const StMediumPrimaryButton = styled(StLargePrimaryButton)`
  background-color: hsl(171, 100%, 41%);
  border: 0px;
  height: 50px;
  font-weight: normal;
  font-size: medium;
`;

export const StSmallPrimaryButton = styled(StLargePrimaryButton)`
  background-color: hsl(171, 100%, 41%);
  border: 0px;
  height: 40px;
  font-weight: normal;
  font-size: small;
`;

export const StLargeNegativeButton = styled(StLargePrimaryButton)`
  border: 3px solid hsl(348, 100%, 61%);
  color: hsl(348, 100%, 61%);

  &:active {
    background-color: red;
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
`;