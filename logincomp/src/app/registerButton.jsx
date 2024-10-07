const RegisterButton = ({ onClick }) => {
  return (
    <div>
      <button className="btn btn-outline w-20" onClick={onClick}>
        register
      </button>
    </div>
  );
};

export default RegisterButton;
