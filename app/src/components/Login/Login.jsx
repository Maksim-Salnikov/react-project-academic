import React from "react";
import styles from "./Login.module.css";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControl/FormsControl";
import { required } from "../../utils/Validators/Validatos";
import { Navigate } from "react-router-dom";

const LoginForm = (props) => {
  return (
    <form className={styles.form} onSubmit={props.handleSubmit}>
      <Field
        component={Input}
        name={"email"}
        placeholder="Логин"
        className={styles.login}
        validate={[required]}
      />
      <Field
        component={Input}
        name={"password"}
        placeholder="Пароль"
        className={styles.password}
        validate={[required]}
      />
      <div>
        <Field
          component={Input}
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

const Login = (props) => {
  let onSubmit = (passData) => {
    debugger;
    props.login(passData.email, passData.password, passData.rememberMe);
  };
  if (props.isAuth) {
    return <Navigate to="/Profile " />;
  }
  return (
    <div>
      <h1 className={styles.title}>Войти</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
