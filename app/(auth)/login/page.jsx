import LoginForm from "@/components/Auth/login/login-form";
import React from "react";

const Login = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;

export const metadata = {
  title: "Login",
  description: "Login to your account",
};
