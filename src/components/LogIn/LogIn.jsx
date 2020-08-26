import React from "react";
import { Form, Field } from "react-final-form";
import {
  LoginView,
  FormContainer,
  FormHeader,
  FormTitle,
  FormSubtitle,
  InputsWrapper,
  Forgotten,
  FormFooter,
  FooterLink,
} from "./styled";
import { validateRequiredField } from "../../utils/form-validators";
import AuthFieldInput from "../ui/AuthFieldInput";
import { Button } from "../ui/SubmitButton/styled";
import Link from "../ui/Link";

const LogIn = () => {
  const onSubmitLogin = (value) => {
    setTimeout(() => console.log(value), 1000);
  };
  return (
    <Form
      onSubmit={onSubmitLogin}
      render={({ handleSubmit, submitting }) => (
        <LoginView>
          <FormContainer>
            <FormHeader>
              <FormTitle>Welcome to BaseballCloud!</FormTitle>
              <FormSubtitle>Sign into your account here:</FormSubtitle>
            </FormHeader>

            <InputsWrapper onSubmit={handleSubmit}>
              <Field
                name="email"
                type="email"
                validate={validateRequiredField}
                placeholder="Email"
                render={AuthFieldInput}
              />
              <Field
                name="password"
                type="password"
                validate={validateRequiredField}
                placeholder="Password"
                render={AuthFieldInput}
              />
              <Button type="submit">Sign In</Button>
              <Forgotten>
                <Link to="forgotten">Forgotten password?</Link>
              </Forgotten>
            </InputsWrapper>
            <FormFooter>
              Don’t have an account?{" "}
              <FooterLink to="registration">Sing Up</FooterLink>
            </FormFooter>
          </FormContainer>
        </LoginView>
      )}
    />
  );
};

export default LogIn;
