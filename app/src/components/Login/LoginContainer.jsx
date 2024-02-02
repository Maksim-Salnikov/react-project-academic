import Login from "./Login";
import { login } from "../../redux/auth-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { login })(Login);
