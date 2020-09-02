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

const EditSidebar = ({ profileCurrents }) => {
  const firstPositionOpts = [
    { value: "catcher", label: "Catcher" },
    { value: "first_base", label: "First Base" },
    { value: "second_base", label: "Second Base" },
    { value: "shortstop", label: "Shortstop" },
  ];
  const secondPositionOpts = [{ value: "_", label: "_" }, ...firstPositionOpts];
  const handsSide = [
    { value: "l", label: "R" },
    { value: "l", label: "L" },
  ];
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
                initialValue={profileCurrents.first_name}
                placeholder="First name*"
                typeEdit="short"
                component={FormTextInput}
              />
              <Field
                name="last_name"
                type="text"
                initialValue={profileCurrents.last_name}
                placeholder="Last Name *"
                typeEdit="short"
                component={FormTextInput}
              />
            </ShortInputsWrap>
            <Field
              name="position"
              initialOptValue={profileCurrents.position}
              placeholder="Position in Game *"
              component={FormSelect}
              inputOnChange={onChange}
              options={firstPositionOpts}
            />
            <Field
              name="position2"
              placeholder="Secondary Position in Game"
              component={FormSelect}
              options={secondPositionOpts}
            />

            <SidebarSubtitle>Personal Info</SidebarSubtitle>

            <Field
              name="age"
              type="number"
              placeholder="Age *"
              initialValue={profileCurrents.age}
              component={FormTextInput}
            />
            <ShortInputsWrap>
              <Field
                name="feet"
                type="number"
                initialValue={profileCurrents.feet}
                placeholder="Feet *"
                component={FormTextInput}
                validate={FormValidators.heightValidate}
                typeEdit="short"
              />
              <Field
                name="inches"
                type="number"
                initialValue={profileCurrents.inches}
                placeholder="Inches"
                component={FormTextInput}
                validate={FormValidators.inchesValidate}
                typeEdit="short"
              />
            </ShortInputsWrap>
            <Field
              name="weight"
              type="number"
              initialValue={profileCurrents.weight}
              placeholder="Weight *"
              component={FormTextInput}
            />
            <ShortInputsWrap>
              <Field
                name="throws_hand"
                placeholder="Throws *"
                component={FormSelect}
                selectType="short"
                options={handsSide}
              />
              <Field
                name="bats_hand"
                placeholder="Bats *"
                component={FormSelect}
                selectType="short"
                options={handsSide}
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
              initialValue={profileCurrents.biography}
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
