import React from "react";
import { Route } from "react-router-dom";
import uuid from "uuid/v4";
import Home from "../pages/Home/Home";
import Filter from "../pages/Filter/Filter";
import { ProtectedRoute } from "./ProtectedRoute";

const routes = [
  {
    path: "/home",
    exact: true,
    auth: true,
    component: () => <Home />,
  }, {
    path: "/filter",
    exact: true,
    auth: false,
    component: () => <Filter />,
  }, {
    path: "*",
    exact: true,
    auth: false,
    component: () => <h1>404 not found</h1>,
  },
];


const makeRoutes = () => routes.map((route) => {
  if (route.auth) {
    return <ProtectedRoute key={uuid()} {...route} />;
  }
  return <Route key={uuid()} {...route} />;
});


export default makeRoutes();
