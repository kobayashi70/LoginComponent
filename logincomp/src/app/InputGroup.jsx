"use client";

const { default: PasswordInput } = require("./PasswordInput");
const { default: UsernameInput } = require("./usernameInput");

const InputGroup = ({ username, setUsername, password, setPassword }) => {
  return (
    <div className="flex flex-col gap-4">
      <UsernameInput
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <PasswordInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
};

export default InputGroup;
