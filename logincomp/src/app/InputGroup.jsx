"use client";

const { default: PasswordInput } = require("./PasswordInput");
const { default: UsernameInput } = require("./usernameInput");

const InputGroup = () => {
  return (
    <div className="flex flex-col gap-4">
      <UsernameInput />
      <PasswordInput />
    </div>
  );
};

export default InputGroup;
