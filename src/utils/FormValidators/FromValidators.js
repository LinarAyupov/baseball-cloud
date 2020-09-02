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

  SidebarValidator = (value) => {
    const errors = {};
    if (!value.first_name) {
      errors.first_name = "First Name Required";
    }
    if (!value.last_name) {
      errors.last_name = "Last Name Required";
    }
    if (!value.age) {
      errors.age = "Age Required";
    }
    if (!value.feet) {
      errors.feet = "Feet Required";
    }
    if (!value.bats_hand) {
      errors.bats_hand = "Bats Required";
    }
    if (!value.throws_hand) {
      errors.throws_hand = "Throws Required";
    }
    if (!value.position) {
      errors.position = "Position Required";
    }
    if (!value.weight) {
      errors.weight = "Weigth Required";
    }
    if (value.height || value.height > 7) {
      errors.weight = "Maximum height is 7";
    }
    if (value.inches > 11 || value.inches < 0) {
      errors.inches = "Inches can be from 0 to 11";
    }
    return errors;
  };
}

export default new FormValidators();
