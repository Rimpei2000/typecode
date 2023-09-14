import React from "react";
import { Button } from "@material-ui/core";

const SignOut = () => {
  const user = true;

  const handleSignOut = () => {};

  return user ? <Button onClick={handleSignOut}>Sign Out</Button> : <></>;
};

export default SignOut;
