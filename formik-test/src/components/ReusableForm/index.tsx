import { Form, Formik, FormikProps } from "formik";
import TextInput from "./components/TextInput";
import styles from "../BasicForm.module.css";
import * as Yup from "yup";

interface ReusableFormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const ReusableFormSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email adress").required("Required"),
});

const ReusableForm = () => {
  const initialValues: ReusableFormValues = {
    firstName: "",
    lastName: "",
    email: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ReusableFormSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form className={styles.container}>
        <TextInput name="firstName" type="text" label="First Name" />
        <TextInput name="lastName" type="text" label="Last Name" />
        <TextInput name="email" type="email" label="Email" />
        <button className={styles.submitButton} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default ReusableForm;
