import styled from "styled-components";

export const TextAreaWrap = styled.div`
  position: relative;
  width: 100%;
`;

export const TextAreaInput = styled.textarea`
  transition: all 0.2s;
  touch-action: manipulation;
  display: block;
  width: 100%;
  min-height: 110px;
  resize: none;
  border-radius: 4px;
  background-color: #eff1f3;
  padding: 11px 16px;
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 1.13;
  font-weight: 400;
  color: #667784;
  border: 1px solid transparent;
  outline: none;
  &:focus {
    background-color: #fff;
    border: 1px solid #48caff;
  }
  &:focus ~ #inputLabel {
    visibility: visible;
    transform: translate(0, 0) scale(0.85);
    font-size: 5px;
    cursor: pointer;
    padding-left: 10px;
    &:hover {
      color: #48caff;
      text-decoration: underline;
    }
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  font-size: 14px;
  line-height: 1;
  font-weight: 400;
  color: #788b99;
  max-width: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transform-origin: left bottom;
  transform: translate(17px, 15px) scale(1.15);
  visibility: hidden;
  transition: all 0.2s;
  touch-action: manipulation;
  border: 1px solid transparent;
  cursor: pointer;
  z-index: 100;
  &:hover {
    color: #48caff;
    text-decoration: underline;
  }
`;
