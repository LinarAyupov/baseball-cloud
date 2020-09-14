import React from "react";
import {
  getIsFetchingState,
  getUnauthorizedState,
} from "../../../selectors/selectors";
import { Form, Field } from "react-final-form";
import { InputsWrapper, Forgotten } from "./styled";
import AuthContainer from "../../commons/AuthContainer";
import AuthFormHeader from "../../commons/AuthFormHeader";
import FormValidator from "../../../utils/FormValidator";
import TextInput from "../../ui/TextInput";
import SubmitButton from "../../ui/SubmitButton";
import Link from "../../ui/Link";
import AuthFormFooter from "../../commons/AuthFormFooter/AuthFormFooter";
import { connect } from "react-redux";
import { singIn } from "../../../actions/authActions";

const LogIn = ({ singIn, isFetching, unauthorized }) => {
  return (
    <Form
      onSubmit={singIn}
      render={({ handleSubmit }) => (
        <AuthContainer>
          <AuthFormHeader
            title="Welcome to BaseballCloud!"
            subtitle="Sign into your account here:"
          />
          <InputsWrapper onSubmit={handleSubmit}>
            <Field
              name="email"
              type="email"
              validate={FormValidator.loginFieldRequired}
              placeholder="Email"
              render={TextInput}
              icon="user"
              autoComplete="address-line1"
              formType="auth"
            />
            <Field
              name="password"
              type="password"
              autoComplete="current-password"
              validate={FormValidator.loginFieldRequired}
              placeholder="Password"
              render={TextInput}
              icon="lock"
              unauthorized={unauthorized}
              isShowError={true}
              formType="auth"
            />
            <SubmitButton type="submit" disabled={isFetching}>
              Sign In
            </SubmitButton>
            <Forgotten>
              <Link to="forgotten">Forgotten password?</Link>
            </Forgotten>
          </InputsWrapper>
          <AuthFormFooter
            description="Don’t have an account?"
            linkDescription="Sing Up"
            to="/registration"
          />
        </AuthContainer>
      )}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: getIsFetchingState(state),
    unauthorized: getUnauthorizedState(state),
  };
};

export default connect(mapStateToProps, { singIn })(LogIn);
