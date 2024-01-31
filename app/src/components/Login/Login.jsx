import React from "react";
import styles from "./Login.module.css";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <form className={styles.form} onSubmit={props.handleSubmit}>
      <Field
        component={"input"}
        name={"Login"}
        placeholder="Логин"
        className={styles.login}
      />
      <Field
        component={"input"}
        name={"Password"}
        placeholder="Пароль"
        className={styles.password}
      />
      <div>
        <Field
          component={"input"}
          name={"rememberMe"}
          type="checkbox"
          className={styles.checkbox}
        />
        <span className={styles.remember}>Запонмить меня</span>
      </div>
      <button className={styles.button}>Войти</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = () => {
  let onSubmit = (passData) => {
    console.log(passData);
  };
  return (
    <div>
      <h1 className={styles.title}>Войти</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
