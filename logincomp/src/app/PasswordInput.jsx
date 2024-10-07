import { useState } from "react";

const PasswordInput = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex justify-center">
      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type={showPassword ? "text" : "password"}
          className="grow"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={togglePasswordVisibility} className="">
          {showPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M8 3a5 5 0 0 1 0 10 5 5 0 0 1 0-10zM8 1C3.582 1 0 6 0 8s3.582 7 8 7 8-5 8-7-3.582-7-8-7z"
                clipRule="evenodd"
              />
              <path d="M4.5 8A3.5 3.5 0 0 0 8 11.5 3.5 3.5 0 0 0 11.5 8 3.5 3.5 0 0 0 8 4.5 3.5 3.5 0 0 0 4.5 8z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M0 8s5-7 8-7 8 7 8 7-5 7-8 7S0 8 0 8z"
                clipRule="evenodd"
              />
              <path d="M5.5 8A2.5 2.5 0 0 0 8 10.5 2.5 2.5 0 0 0 10.5 8 2.5 2.5 0 0 0 8 5.5 2.5 2.5 0 0 0 5.5 8z" />
            </svg>
          )}
        </button>
      </label>
    </div>
  );
};

export default PasswordInput;
