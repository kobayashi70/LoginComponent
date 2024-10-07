const LoginButton = ({ onClick }) => {
  return (
    <div>
      <button className="btn btn-outline w-20" onClick={onClick}>
        login
      </button>
    </div>
  );
};

export default LoginButton;
