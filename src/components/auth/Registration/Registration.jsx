import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import AuthContainer from "../../commons/AuthContainer";
import TextInput from "../../ui/TextInput";
import SubmitButton from "../../ui/SubmitButton";
import FormValidator from "../../../utils/FormValidator";
import {
  TypeButtonsWrapper,
  CheckedIcon,
  TypeBtnLeft,
  TypeBtnRight,
  InputsWrapper,
  LegalWrapper,
  LegalLink,
} from "./styled";
import AuthFormFooter from "../../commons/AuthFormFooter/AuthFormFooter";
import AuthUserType from "../../commons/AuthUserType/AuthUserType";
import { connect } from "react-redux";
import { singUp } from "../../../actions/authActions";
import {
  getEmailUsedStatus,
  getIsFetchingState,
} from "../../../selectors/selectors";

const Registration = ({ singUp, isFetching, emailUsed }) => {
  const [userType, onChangeUserType] = useState("player");
  const submitRegistration = (value) => {
    const userData = {
      ...value,
      role: userType,
    };
    singUp({ userData });
  };
  return (
    <Form
      onSubmit={submitRegistration}
      validate={FormValidator.confirmValidate}
      render={({ handleSubmit }) => (
        <AuthContainer>
          <TypeButtonsWrapper>
            <TypeBtnLeft
              onClick={() => onChangeUserType("player")}
              isActive={userType === "player" ? true : false}
            >
              {userType === "player" && <CheckedIcon />}
              Sing Up as Player
            </TypeBtnLeft>
            <TypeBtnRight
              onClick={() => onChangeUserType("scout")}
              isActive={userType === "scout" ? true : false}
            >
              {userType === "scout" && <CheckedIcon />}
              Sign Up as Scout
            </TypeBtnRight>
          </TypeButtonsWrapper>
          <AuthUserType
            title="Scouts"
            description="Coaches and scouts can view players in the system but do not have their own profile."
          />
          <InputsWrapper onSubmit={handleSubmit}>
            <Field
              name="email"
              type="email"
              validate={FormValidator.fieldRequired}
              placeholder="Email"
              render={TextInput}
              icon="user"
              isShowError={true}
              emailUsed={emailUsed}
              formType="auth"
            />
            <Field
              name="password"
              type="password"
              autoComplete="new-password"
              placeholder="Password"
              render={TextInput}
              icon="lock"
              isShowError={true}
              formType="auth"
            />
            <Field
              name="password_confirmation"
              type="password"
              autoComplete="new-password"
              placeholder="Confirm Password"
              render={TextInput}
              icon="check"
              isShowError={true}
              formType="auth"
            />
            <LegalWrapper>
              <p>
                By clicking Sign Up, you agree to our{" "}
                <LegalLink to="/legal/terms">Terms of Service</LegalLink> and{" "}
                <LegalLink to="/legal/privacy">PrivacyPolicy</LegalLink>.
              </p>
            </LegalWrapper>
            <SubmitButton type="submit" disabled={isFetching}>
              Sign Up
            </SubmitButton>
          </InputsWrapper>
          <AuthFormFooter
            description="Already registered?"
            linkDescription="Sing In"
            to="/login"
          />
        </AuthContainer>
      )}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: getIsFetchingState(state),
    emailUsed: getEmailUsedStatus(state),
  };
};

export default connect(mapStateToProps, { singUp })(Registration);
