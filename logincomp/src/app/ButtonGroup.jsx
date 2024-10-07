import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";

const ButtonGroup = ({ handleRegister, handleLogin }) => {
  return (
    <div className="w-72 flex justify-around">
      <RegisterButton onClick={handleRegister} />
      <LoginButton onClick={handleLogin} />
    </div>
  );
};

export default ButtonGroup;
