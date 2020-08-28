class FormValidators {
  loginFieldRequired = (value) => {
    if (!value || value === "") {
      return "Invalid login credentials. Please try again.";
    } else {
      return undefined;
    }
  };

  fieldRequired = (value) => {
    if (!value || value === "") {
      return "Required";
    } else {
      return undefined;
    }
  };

  confirmValidate = (value) => {
    const errors = {};
    if (!value.password) {
      errors.password = "Required";
    }

    if (value.password) {
      if (value.password.length < 8) {
        errors.password = "Must contain more than 8 characters";
      }
    }

    if (!value.password_confirmation) {
      errors.password_confirmation = "Required";
    } else if (value.password_confirmation !== value.password) {
      errors.password_confirmation = "Passwords are not equal";
    }
    return errors;
  };
}

export default new FormValidators();
