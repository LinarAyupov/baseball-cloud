import React from "react";
import { Form, Field } from "react-final-form";
import { validateRequiredField } from "../../../utils/form-validators";
import AuthContainer from "../../commons/AuthContainer";
import AuthFormHeader from "../../commons/AuthFormHeader";
import AuthFieldInput from "../../ui/AuthFieldInput";
import { InputsWrapper, FormFooter, FooterLink } from "./styled";
import SubmitButton from "../../ui/SubmitButton";

const Forgotten = () => {
  const onSubmitEmail = (value) => {
    console.log(value);
  };
  return (
    <Form
      onSubmit={onSubmitEmail}
      render={({ handleSubmit }) => (
        <AuthContainer>
          <AuthFormHeader
            title="Forgot Password"
            subtitle="Please enter your email address. You will receive a link to reset your password via email."
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
            <SubmitButton type="submit">Submit</SubmitButton>
            <FormFooter>
              Remember password? <FooterLink to="/login">Sing In</FooterLink>
            </FormFooter>
          </InputsWrapper>
        </AuthContainer>
      )}
    />
  );
};

export default Forgotten;
