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

const EditSidebar = ({ profileCurrents, schools, teams }) => {
  console.log(profileCurrents);
  const firstPositionOpts = [
    { id: "catcher", name: "Catcher" },
    { id: "first_base", name: "First Base" },
    { id: "second_base", name: "Second Base" },
    { id: "shortstop", name: "Shortstop" },
  ];
  const secondPositionOpts = [{ id: "", name: "_" }, ...firstPositionOpts];
  const handsSide = [
    { id: "r", name: "R" },
    { id: "l", name: "L" },
  ];
  const setDefaultValue = (options, value) => {
    let defaultValue = options.find((opt) => opt.id === value);
    return defaultValue;
  };

  const click = (value) => console.log(value);
  const onChange = (e) => {
    return e.label;
  };
  return (
    <SidebarContainer>
      <AvatarFormWrap>
        <AvatarWrap avatarUrl={profileCurrents.avatar} />
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
              initialValue={setDefaultValue(
                firstPositionOpts,
                profileCurrents.position
              )}
              placeholder="Position in Game *"
              component={FormSelect}
              inputOnChange={onChange}
              options={firstPositionOpts}
            />
            <Field
              name="position2"
              placeholder="Secondary Position in Game"
              initialValue={setDefaultValue(
                firstPositionOpts,
                profileCurrents.position2
              )}
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
                initialValue={setDefaultValue(
                  handsSide,
                  profileCurrents.throws_hand
                )}
                component={FormSelect}
                selectType="short"
                options={handsSide}
              />
              <Field
                name="bats_hand"
                placeholder="Bats *"
                initialValue={setDefaultValue(
                  handsSide,
                  profileCurrents.bats_hand
                )}
                component={FormSelect}
                selectType="short"
                options={handsSide}
              />
            </ShortInputsWrap>
            <SidebarSubtitle>School</SidebarSubtitle>
            <Field
              name="School"
              placeholder="School"
              component={FormSelect}
              initialValue={setDefaultValue(schools, profileCurrents.school)}
              options={schools}
            />
            <Field
              name="school_year"
              placeholder="Shool Year"
              component={FormSelect}
            />
            <Field
              name="teams"
              placeholder="Team"
              component={FormSelect}
              initialValue={profileCurrents.teams}
              options={teams}
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
