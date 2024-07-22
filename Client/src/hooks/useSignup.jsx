import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);

  const { dispatch } = useAuthContext();

  const signup = async (email, password) => {
    setError(null);

    const response = await fetch("http://localhost:5800/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (!response.ok) {
      setError(data.error);
    } else {
      // save the data in the local storage
      localStorage.setItem("user", JSON.stringify(data));

      // update user context
      dispatch({ type: "LOGIN", payload: data });
    }
  };

  return { signup, error };
};
