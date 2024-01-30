import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      debugger;
      if (!this.props.isAuth) return <Navigate to="/Login" />;

      return <Component {...this.props} />;
    }
  }
  let ConnectedAuthRedirectCompinent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );
  return ConnectedAuthRedirectCompinent;
};
