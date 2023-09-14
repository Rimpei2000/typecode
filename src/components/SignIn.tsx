import React from 'react';
import { Button } from "@material-ui/core";

const SignIn = () => {
  const user = true;

  const handleSignIn = () => {

  };
  return user ? (
    <Button onClick={handleSignIn}>Sign In</Button>
  ) : <></>
}

export default SignIn