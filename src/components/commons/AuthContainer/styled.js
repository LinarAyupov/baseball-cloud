import styled from "styled-components";

export const AuthView = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  padding: 16px;
`;

export const FormContainer = styled.div`
  background: hsla(0, 0%, 100%, 0.8);
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(10px);
  width: 100%;
  max-width: 450px;
`;
