import * as yup from "yup";

const formValidationSchema = yup.object().shape({
  name: yup
    .string()
    .typeError("Will be a string")
    .min(3, "The field must contain more than 3 characters")
    .max(100, "The field must contain less than 100 characters")
    .required("This is a required field"),
  email: yup
    .string()
    .typeError("Will be a string")
    .email("The field contains an error")
    .min(10, "The field must contain more than 10 characters")
    .max(63, "The field must contain less than 63 characters")
    .required("This is a required field"),
});

export default formValidationSchema;
