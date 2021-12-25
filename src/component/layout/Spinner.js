import React, { Fragment } from "react";
import spinner from "./spinner.gif";
import { Fragment } from "react/cjs/react.production.min";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt=""
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </Fragment>
  );
};

export default Spinner;
