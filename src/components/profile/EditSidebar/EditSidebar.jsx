import React from "react";
import { SidebarContainer } from "../../../commonStyles/styled";
import { Form, Field } from "react-final-form";
import FormValidators from "../../../utils/FormValidators";
import {
  FormWrap,
  ShortInputsWrap,
  ButtonsWrap,
  CancelBtn,
  SaveBtn,
} from "./styled";
import TextInput from "../../ui/TextInput";
import Select from "../../ui/Select";
import SidebarSubtitle from "../../ui/SidebarSubtitle";
import TextArea from "../../ui/TextArea";
import AvatarForm from "../../ui/AvatarForm";

const EditSidebar = ({
  profileCurrents,
  schools,
  teams,
  firstPositions,
  secondPositions,
  handsSides,
  facilities,
  profileFacilities,
  schoolYears,
  updateProfile,
  isFetching,
  uploadPhoto,
  setIsEdit,
}) => {
  const setDefaultValue = (options, value) => {
    let defaultValue = {};
    if (options) {
      defaultValue = options.find((opt) => opt.id === value);
    }
    return defaultValue;
  };

  const createProfileCounts = (value) => {
    const {
      age,
      position,
      position2,
      bats_hand,
      throws_hand,
      school,
      school_year,
      facilities,
      feet,
      inches,
      weight,
    } = value;
    const { id, avatar } = profileCurrents;
    const profileCounts = {
      ...value,
      age: Number(age),
      feet: Number(feet),
      inches: Number(inches),
      weight: Number(weight),
      id,
      avatar,
      position: position.id,
      position2: position2.id,
      bats_hand: bats_hand.id,
      throws_hand: throws_hand.id,
      school: school || profileCurrents.school,
      school_year: school_year.id || profileCurrents.school_year,
      facilities: facilities
        ? value.facilities.map((f) => ({
            id: f.id,
            email: f.email,
            u_name: f.name,
          }))
        : [],
    };

    updateProfile({ profileCounts });
  };

  return (
    <SidebarContainer>
      <AvatarForm avatar={profileCurrents.avatar} uploadPhoto={uploadPhoto} />
      <Form
        onSubmit={createProfileCounts}
        validate={FormValidators.SidebarValidator}
        render={({ handleSubmit, submitSucceeded }) => (
          <FormWrap
            onSubmit={handleSubmit}
            onKeyPress={(e) => {
              e.key === "Enter" && e.preventDefault();
            }}
          >
            <ShortInputsWrap style={{ marginBottom: "10px" }}>
              <Field
                name="first_name"
                type="text"
                initialValue={profileCurrents.first_name}
                placeholder="First name*"
                typeEdit="short"
                component={TextInput}
                formType="editProfile"
              />
              <Field
                name="last_name"
                type="text"
                initialValue={profileCurrents.last_name}
                placeholder="Last Name *"
                typeEdit="short"
                component={TextInput}
                formType="editProfile"
              />
            </ShortInputsWrap>
            <Field
              name="position"
              initialValue={setDefaultValue(
                firstPositions,
                profileCurrents.position
              )}
              placeholder="Position in Game *"
              component={Select}
              options={firstPositions}
            />
            <Field
              name="position2"
              placeholder="Secondary Position in Game"
              initialValue={setDefaultValue(
                secondPositions,
                profileCurrents.position2
              )}
              component={Select}
              options={secondPositions}
            />

            <SidebarSubtitle>Personal Info</SidebarSubtitle>

            <Field
              name="age"
              type="number"
              placeholder="Age *"
              initialValue={profileCurrents.age}
              component={TextInput}
              formType="editProfile"
            />
            <ShortInputsWrap>
              <Field
                name="feet"
                type="number"
                initialValue={profileCurrents.feet}
                placeholder="Feet *"
                component={TextInput}
                validate={FormValidators.heightValidate}
                typeEdit="short"
                formType="editProfile"
              />
              <Field
                name="inches"
                type="number"
                initialValue={profileCurrents.inches}
                placeholder="Inches"
                component={TextInput}
                formType="editProfile"
                typeEdit="short"
              />
            </ShortInputsWrap>
            <Field
              name="weight"
              type="number"
              initialValue={profileCurrents.weight}
              placeholder="Weight *"
              component={TextInput}
              formType="editProfile"
            />
            <ShortInputsWrap>
              <Field
                name="throws_hand"
                placeholder="Throws *"
                initialValue={setDefaultValue(
                  handsSides,
                  profileCurrents.throws_hand
                )}
                component={Select}
                selectType="short"
                options={handsSides}
              />
              <Field
                name="bats_hand"
                placeholder="Bats *"
                initialValue={setDefaultValue(
                  handsSides,
                  profileCurrents.bats_hand
                )}
                component={Select}
                selectType="short"
                options={handsSides}
              />
            </ShortInputsWrap>
            <SidebarSubtitle>School</SidebarSubtitle>
            <Field
              name="school"
              placeholder="School"
              initialValue={profileCurrents.school}
              component={Select}
              options={schools}
            />
            <Field
              initialValue={setDefaultValue(
                schoolYears,
                profileCurrents.school_year
              )}
              name="school_year"
              placeholder="Shool Year"
              component={Select}
              options={schoolYears}
            />
            <Field
              name="teams"
              placeholder="Team"
              component={Select}
              initialValue={profileCurrents.teams}
              options={teams}
              multiple={true}
              isMulti={true}
            />
            <SidebarSubtitle>Facility</SidebarSubtitle>
            <Field
              name="facilities"
              initialValue={profileFacilities}
              placeholder="Facility "
              options={facilities}
              component={Select}
              isMulti={true}
              facilities={true}
            />
            <SidebarSubtitle>About</SidebarSubtitle>
            <Field
              name="biography"
              initialValue={profileCurrents.biography}
              placeholder="Describe yourself in a few words"
              component={TextArea}
            />
            <ButtonsWrap>
              <CancelBtn disabled={isFetching} onClick={() => setIsEdit(false)}>
                Cancel
              </CancelBtn>
              <SaveBtn type="submit" disabled={isFetching}>
                {isFetching ? (
                  <i
                    className="fa fa-spinner fa-spin"
                    style={{ fontSize: "19px" }}
                  ></i>
                ) : (
                  "Save"
                )}
              </SaveBtn>
            </ButtonsWrap>
            {submitSucceeded && !isFetching && setIsEdit(false)}
          </FormWrap>
        )}
      />
    </SidebarContainer>
  );
};

export default React.memo(EditSidebar);
