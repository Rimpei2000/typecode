import SignOut from "./SignOut";
import SignIn from "./SignIn";

const NavBar = () => {
  const user = true;
  return (
    <nav id="navbar">
      <img src="../logo.svg" alt="logo" />
      {user ? <SignOut /> : <SignIn />}
    </nav>
  );
};

export default NavBar;
