"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Welcome = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/");
    } else {
      const storedUsername = localStorage.getItem("username");
      setUsername(storedUsername || "");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    router.push("/");
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-14 row-start-2 items-center">
        <h2 className="text-5xl font-bold text-center">Hello,{username}!</h2>
        <button className="btn btn-outline w-20" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Welcome;
