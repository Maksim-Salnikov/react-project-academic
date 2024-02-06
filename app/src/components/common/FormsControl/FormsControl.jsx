import React from "react";
import styles from "./FormControl.module.css";
import { Field } from "redux-form";

export const Textarea = ({ input, meta: { touched, error }, ...props }) => {
  const hasError = touched && error;
  return (
    <div className={styles.formsControl + " " + (hasError ? styles.error : "")}>
      {hasError && <span className={styles.span}>{error}</span>}
      <textarea {...input} {...props} className={props.className} />
    </div>
  );
};

export const Input = ({ input, meta: { touched, error }, ...props }) => {
  const hasError = touched && error;
  return (
    <div className={styles.formsControl + " " + (hasError ? styles.error : "")}>
      {hasError && <span className={styles.span}>{error}</span>}
      <input {...input} {...props} className={props.className} />
    </div>
  );
};

export const CreateField = (
  component,
  name,
  placeholder,
  className,
  validate,
  props = {}
) => {
  return (
    <Field
      component={component}
      name={name}
      placeholder={placeholder}
      className={className}
      validate={validate}
      {...props}
    />
  );
};
