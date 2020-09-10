import styled, { keyframes } from "styled-components";

const animate = keyframes`
 from {
  width: 0px;
  height:0px;
 }
 50% { width: 18px;
     height: 18px; 

     }
 to {
  width: 0px;
  height:0px;

 }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DotsWrap = styled.div`
  display: flex;
  width: 70px;
  height: 18px;
  align-items: center;
  justify-content: center;
`;
export const DotWrap = styled.span`
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Dot = styled.span`
  display: inline-block;
  width: 18px;
  height: 18px;
  border-radius: 100%;
  background-color: #48bbff;
  animation: ${animate} 1.4s infinite ease-in-out both;
  animation-delay: ${({ delay }) => (delay ? delay : "")};
`;
