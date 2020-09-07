import styled from "styled-components";

export const TableWrap = styled.table`
  width: 100%;
  border: none;
  margin-top: 15px;
`;

export const TableTitle = styled.caption`
  color: #414f5a;
  font-weight: 400;
  font-size: 18px;
  text-align: left;
  line-height: 1.25;
`;

export const TableHeader = styled.tr`
  height: 44px;
  margin-bottom: 6px;
`;
export const TableHeaderItem = styled.td`
  font-size: 14px;
  line-height: 1;
  font-weight: 300;
  color: #667784;
`;

export const TableCountWrap = styled.tr`
  height: 44px;
  border-radius: 4px;
  background-color: #f7f8f9;
  &:hover {
    background-color: #ecf8ff;
  }
`;
export const SpaceRow = styled.tr`
  height: 4px;
`;
export const TableCount = styled.td`
  font-size: 14px;
  color: #414f5a;
`;
