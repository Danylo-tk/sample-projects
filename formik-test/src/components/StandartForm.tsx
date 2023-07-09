import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./BasicForm.module.css";
import * as Yup from "yup";

interface StandartFormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const StandartFormSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email adress").required("Required"),
});

const StandartForm = () => {
  const initialValues: StandartFormValues = {
    firstName: "",
    lastName: "",
    email: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={StandartFormSchema}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      <Form className={styles.container}>
        <label htmlFor="firstName">First Name</label>
        <Field className={styles.textInput} name="firstName" type="text" />
        <ErrorMessage name="firstName" />

        <label htmlFor="lastName">Last Name</label>
        <Field className={styles.textInput} name="lastName" type="text" />
        <ErrorMessage name="lastName" />

        <label htmlFor="email">Email</label>
        <Field className={styles.textInput} name="email" type="email" />
        <ErrorMessage name="email" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default StandartForm;
