import React from "react";
import "./style.sass";
import { Route, Link } from "react-router-dom";
import Login from "../login";

const LandPage = () => {
  return (
    <>
      <Link to="/login">Ir al Login</Link>
      <Route path="/login" component={Login} />
    </>
  );
};

export default LandPage;
