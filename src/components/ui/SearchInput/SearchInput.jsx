import React from "react";
import { Input, InputWrap, IconWrap } from "./styled";
import SearchIconSvg from "../../SvgComponents/SearchIconSvg";

const SearchInput = () => {
  return (
    <InputWrap>
      <IconWrap>
        <SearchIconSvg />
      </IconWrap>
      <Input placeholder="Search" />
    </InputWrap>
  );
};

export default SearchInput;
