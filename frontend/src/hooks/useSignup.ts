import { useState } from "react";
import axios from "axios";

interface SignupResponse {
  name: string;
  email: string;
}

const API_URL = process.env.API_URL || "http://localhost:8000/api";

const useSignup = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const signup = async (username: string, email: string, password: string) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const response = await axios.post<SignupResponse>(`${API_URL}/signup/`, {
        username,
        email,
        password,
      });
      setSuccess(true);
      return response.data;
    } catch (err: any) {
      setError("Signup failed! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading, error, success };
};

export default useSignup;
