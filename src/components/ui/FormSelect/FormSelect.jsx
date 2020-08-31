import React, { useState } from "react";
import { SingleSelect, SelectWrap, Label } from "./styled";

const FormSelect = ({ input, placeholder, selectType = "", isMulti }) => {
  const [isActive, onChangeIsActive] = useState(false);
  const opts = [
    { label: "32ecfsdc", value: "1" },
    { label: "wefwe", value: "2" },
    { label: "234sd", value: "3" },
  ];
  const toggleLabelVisibility = () => {
    onChangeIsActive(!isActive);
  };
  return (
    <SelectWrap selectType={selectType}>
      <Label
        isActive={isActive}
        id="input-label"
        onClick={toggleLabelVisibility}
      >
        {placeholder}
      </Label>
      {isMulti ? (
        <SingleSelect
          {...input}
          classNamePrefix="Select"
          options={opts}
          placeholder={placeholder}
          onFocus={toggleLabelVisibility}
          onBlur={toggleLabelVisibility}
          isMulti
        />
      ) : (
        <SingleSelect
          {...input}
          classNamePrefix="Select"
          options={opts}
          placeholder={placeholder}
          onFocus={toggleLabelVisibility}
          onBlur={toggleLabelVisibility}
        />
      )}
    </SelectWrap>
  );
};

export default FormSelect;
