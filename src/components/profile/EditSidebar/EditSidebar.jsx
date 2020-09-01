import React from "react";
import { SidebarContainer } from "../../../commonStyles/styled";
import { Form, Field } from "react-final-form";
import FormValidators from "../../../utils/FormValidators";
import {
  AvatarFormWrap,
  AvatarWrap,
  AvatarUpload,
  UploadInput,
  FormWrap,
  ShortInputsWrap,
  ButtonsWrap,
  CancelBtn,
  SaveBtn,
} from "./styled";
import FormTextInput from "../../ui/FormTextInput";
import FormSelect from "../../ui/FormSelect/FormSelect";
import SidebarSubtitle from "../../ui/SidebarSubtitle";
import FormTextArea from "../../ui/FormTextArea";

const EditSidebar = () => {
  const click = (value) => console.log(value);
  const onChange = (e) => {
    return e.label;
  };
  return (
    <SidebarContainer>
      <AvatarFormWrap>
        <AvatarWrap />
        <AvatarUpload for="fileInput">Choose Photo</AvatarUpload>
        <UploadInput type="file" id="fileInput" />
      </AvatarFormWrap>
      <Form
        onSubmit={click}
        validate={FormValidators.SidebarValidator}
        render={({ handleSubmit }) => (
          <FormWrap onSubmit={handleSubmit}>
            <ShortInputsWrap style={{ marginBottom: "10px" }}>
              <Field
                name="first_name"
                type="text"
                placeholder="First name*"
                typeEdit="short"
                component={FormTextInput}
              />
              <Field
                name="last_name"
                type="text"
                placeholder="Last Name *"
                typeEdit="short"
                component={FormTextInput}
              />
            </ShortInputsWrap>
            <Field
              name="position"
              placeholder="Position in Game *"
              component={FormSelect}
              inputOnChange={onChange}
            />
            <Field
              name="position2"
              placeholder="Secondary Position in Game"
              component={FormSelect}
            />

            <SidebarSubtitle>Personal Info</SidebarSubtitle>

            <Field
              name="age"
              type="number"
              placeholder="Age *"
              component={FormTextInput}
            />
            <ShortInputsWrap>
              <Field
                name="feet"
                type="number"
                placeholder="Feet *"
                component={FormTextInput}
                validate={FormValidators.heightValidate}
                typeEdit="short"
              />
              <Field
                name="inches"
                type="number"
                placeholder="Inches"
                component={FormTextInput}
                validate={FormValidators.inchesValidate}
                typeEdit="short"
              />
            </ShortInputsWrap>
            <Field
              name="weight"
              type="number"
              placeholder="Weight *"
              component={FormTextInput}
            />
            <ShortInputsWrap>
              <Field
                name="throws_hand"
                placeholder="Throws *"
                component={FormSelect}
                selectType="short"
              />
              <Field
                name="bats_hand"
                placeholder="Bats *"
                component={FormSelect}
                selectType="short"
              />
            </ShortInputsWrap>
            <SidebarSubtitle>School</SidebarSubtitle>
            <Field name="School" placeholder="School" component={FormSelect} />
            <Field
              name="school_year"
              placeholder="Shool Year"
              component={FormSelect}
            />
            <Field
              name="teams"
              placeholder="Team"
              component={FormSelect}
              isMulti={true}
            />
            <SidebarSubtitle>Facility</SidebarSubtitle>
            <Field
              name="facilities "
              placeholder="Facility "
              component={FormSelect}
              isMulti={true}
            />
            <SidebarSubtitle>About</SidebarSubtitle>
            <Field
              name="biography"
              placeholder="Describe yourself in a few words"
              component={FormTextArea}
            />
            <ButtonsWrap>
              <CancelBtn>Cancel</CancelBtn>
              <SaveBtn type="submit">Save</SaveBtn>
            </ButtonsWrap>
          </FormWrap>
        )}
      />
    </SidebarContainer>
  );
};

export default EditSidebar;
