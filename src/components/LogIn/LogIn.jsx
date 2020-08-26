import React from "react";
import { Form, Field } from "react-final-form";
import * as styles from "./LogIn.module.css";
import { validateRequiredField } from "../../utils/form-validators";

const LogIn = () => {
  const onSubmitLogin = (value) => {
    console.log(value);
  };
  return (
    <Form
      onSubmit={onSubmitLogin}
      render={({ handleSubmit, submitting }) => (
        <div className={styles.loginView}>
          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <h1 className={styles.formTitle}>Welcome to BaseballCloud!</h1>
              <h2 className={styles.fromSubtitle}>
                Sign into your account here:
              </h2>
            </div>

            <form className={styles.inputsContainer} onSubmit={handleSubmit}>
              <Field
                name="email"
                type="email"
                validate={validateRequiredField}
                render={({ input }) => (
                  <>
                    <input
                      {...input}
                      placeholder="Email"
                      className={styles.inputsItem}
                    />
                  </>
                )}
              />
              <Field
                name="password"
                type="password"
                validate={validateRequiredField}
                render={({ input, meta }) => (
                  <>
                    <input
                      {...input}
                      placeholder="Password"
                      className={styles.inputsItem}
                    />
                    {meta.error && meta.touched && (
                      <span className={styles.submitErrMassage}>
                        {meta.error}
                      </span>
                    )}
                  </>
                )}
              />
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={submitting}
              >
                Sing In
              </button>
            </form>
          </div>
        </div>
      )}
    />
  );
};

export default LogIn;
