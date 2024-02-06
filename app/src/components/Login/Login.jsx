import React from "react";
import styles from "./Login.module.css";
import { reduxForm } from "redux-form";
import { CreateField, Input } from "../common/FormsControl/FormsControl";
import { required } from "../../utils/Validators/Validatos";
import { Navigate } from "react-router-dom";

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {CreateField(Input, "email", "Логин", styles.login, [required])}
      {CreateField(Input, "password", "пароль", styles.password, [required], {
        type: "password",
      })}
      <div>
        {CreateField(Input, "rememberMe", null, styles.checkbox, null, {
          type: "checkbox",
        })}
        <span className={styles.remember}>Запомнить меня</span>
      </div>
      {error && <div className={error.commonError}>{error}</div>}
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
