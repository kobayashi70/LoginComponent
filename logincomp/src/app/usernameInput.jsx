import { useState } from "react";

const UsernameInput = () => {
  const [username, setUsername] = useState("");
  return (
    <div className="flex justify-center">
      <label className="input input-bordered flex items-center gap-2 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
        <input
          type="text"
          className="grow"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
    </div>
  );
};

export default UsernameInput;
