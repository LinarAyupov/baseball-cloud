import React, { useState } from "react";
import { SingleSelect, SelectWrap, Label, ErrorMassage } from "./styled";

const FormSelect = ({
  input,
  placeholder,
  selectType = "",
  isMulti,
  meta,
  options,
}) => {
  const { onChange } = input;
  const [isActive, onChangeIsActive] = useState(false);
  const [selectedOption, setSelectedOpion] = useState("");
  let opts = [];
  // if(options) {
  //   opts = options.map(opt => {value: {...opt}})
  // }

  const toggleLabelVisibility = () => {
    onChangeIsActive(!isActive);
  };

  const handleChange = (selectedOption) => {
    setSelectedOpion({ selectedOption });
    return selectedOption;
  };

  const inputProps = {
    ...input,
    onChange: ({ label, value }) => {
      onChange(label);
      handleChange({ value });
    },
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
          {...inputProps}
          classNamePrefix="Select"
          options={opts}
          value={selectedOption.value}
          placeholder={placeholder}
          onFocus={toggleLabelVisibility}
          onBlur={toggleLabelVisibility}
        />
      )}
      {meta.error && meta.submitFailed && (
        <ErrorMassage>{meta.error}</ErrorMassage>
      )}
    </SelectWrap>
  );
};

export default FormSelect;
