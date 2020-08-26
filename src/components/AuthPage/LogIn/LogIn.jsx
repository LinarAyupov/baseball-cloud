import React from "react";
import { Form, Field } from "react-final-form";
import { InputsWrapper, Forgotten, FormFooter, FooterLink } from "./styled";
import AuthContainer from "../../commons/AuthContainer";
import AuthFormHeader from "../../commons/AuthFormHeader";
import { validateRequiredField } from "../../../utils/form-validators";
import AuthFieldInput from "../../ui/AuthFieldInput";
import SubmitButton from "../../ui/SubmitButton";
import Link from "../../ui/Link";

const LogIn = () => {
  const onSubmitLogin = (value) => {
    setTimeout(() => console.log(value), 1000);
  };
  return (
    <Form
      onSubmit={onSubmitLogin}
      render={({ handleSubmit, submitting }) => (
        <AuthContainer>
          <AuthFormHeader
            title="Welcome to BaseballCloud!"
            subtitle="Sign into your account here:"
          />
          <InputsWrapper onSubmit={handleSubmit}>
            <Field
              name="email"
              type="email"
              validate={validateRequiredField}
              placeholder="Email"
              render={AuthFieldInput}
              icon="user"
            />
            <Field
              name="password"
              type="password"
              validate={validateRequiredField}
              placeholder="Password"
              render={AuthFieldInput}
              icon="lock"
            />
            <SubmitButton type="submit">Sign In</SubmitButton>
            <Forgotten>
              <Link to="forgotten">Forgotten password?</Link>
            </Forgotten>
          </InputsWrapper>
          <FormFooter>
            Don’t have an account?{" "}
            <FooterLink to="registration">Sing Up</FooterLink>
          </FormFooter>
        </AuthContainer>
      )}
    />
  );
};

export default LogIn;
