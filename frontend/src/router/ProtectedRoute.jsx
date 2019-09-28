import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      if (false) {
        return <Component {...props} />;
      }
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: {
              from: props.location,
            },
          }}
        />
      );
    }}
  />
);


