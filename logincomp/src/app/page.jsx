"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputGroup from "./InputGroup";
import ButtonGroup from "./ButtonGroup";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validUsername = "user";
  const validPassword = "password";

  const handleLogin = () => {
    if (username === validUsername && password === validPassword) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", username);
      router.push("/welcome");
    } else {
      setError("ユーザー名またはパスワードが正しくありません");
    }
  };

  const handleRegister = () => {
    alert("ユーザー登録はまだ実装されていません");
  };

  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-14 row-start-2 items-center">
        <h1 className="text-6xl font-bold text-center">Login</h1>
        <InputGroup
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <ButtonGroup
          handleLogin={handleLogin}
          handleRegister={handleRegister}
        />
      </div>
    </main>
  );
};

export default Login;
