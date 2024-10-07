import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";

const ButtonGroup = () => {
  return (
    <div className="w-72 flex justify-around">
      <RegisterButton />
      <LoginButton />
    </div>
  );
};

export default ButtonGroup;
