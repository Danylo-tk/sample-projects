import { useFormik } from "formik";
import styles from "./BasicForm.module.css";

const BasicForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form className={styles.container} onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        className={styles.textInput}
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        className={styles.textInput}
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      <label htmlFor="email">Email Address</label>
      <input
        className={styles.textInput}
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <button className={styles.textInput} type="submit">
        Submit
      </button>
    </form>
  );
};

export default BasicForm;
