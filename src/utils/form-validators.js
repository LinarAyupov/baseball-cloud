export const validateRequiredField = (value) => {
  if (!value || value === "") {
    return "Invalid login credentials. Please try again.";
  } else {
    return undefined;
  }
};
