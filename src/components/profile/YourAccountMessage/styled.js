import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-height: 570px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
`;

export const Title = styled.div`
  font-size: 24px;
  line-height: 1.25;
  font-weight: 400;
  -webkit-text-align: center;
  text-align: center;
  color: #667784;
  font-size: 32px;
  font-weight: 700;
  margin: 17px 0 16px;
`;

export const Description = styled.div`
  font-size: 16px;
  color: #667784;
  -webkit-text-align: center;
  text-align: center;
`;
