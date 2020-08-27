import React from "react";
import { Form, Field } from "react-final-form";
import { InputsWrapper, Forgotten } from "./styled";
import AuthContainer from "../../commons/AuthContainer";
import AuthFormHeader from "../../commons/AuthFormHeader";
import { loginFieldRequired } from "../../../utils/form-validators";
import AuthFieldInput from "../../ui/AuthFieldInput";
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
              validate={loginFieldRequired}
              placeholder="Email"
              render={AuthFieldInput}
              icon="user"
              autoComplete="address-line1"
            />
            <Field
              name="password"
              type="password"
              autoComplete="current-password"
              validate={loginFieldRequired}
              placeholder="Password"
              render={AuthFieldInput}
              icon="lock"
              unauthorized={unauthorized}
              isShowError={true}
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
    isFetching: state.authData.isFetching,
    unauthorized: state.authData.unauthorized,
  };
};

export default connect(mapStateToProps, { singIn })(LogIn);
