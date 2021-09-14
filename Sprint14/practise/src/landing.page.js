import React from "react";
import auth from "./auth";

export const LandingPage = props => {
  return (
    <div>
      <h1>Landing Page</h1>
      <a
        onClick={() => {
          auth.login(() => {
            props.history.push("/");
          });
        }}
      >Show protected information if
      </a>
      <div>
        <input id="protected" type="text" onChange={auth.handleChange} size="5"></input> is odd
        </div>
    </div>
  );
};
