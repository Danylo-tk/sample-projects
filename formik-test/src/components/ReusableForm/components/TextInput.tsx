import { FieldHookConfig, useField } from "formik";
import styles from "../../BasicForm.module.css";

interface TextInputProps {
  label: string;
}

const TextInput = ({
  label,
  ...props
}: TextInputProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className={styles.textInput} {...field} />
      {meta.touched && meta.error && <div>{meta.error}</div>}
    </>
  );
};

export default TextInput;
