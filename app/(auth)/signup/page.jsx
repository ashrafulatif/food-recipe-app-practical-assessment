import SignupForm from "@/components/Auth/signup/signup-form";
import React from "react";

const Signup = () => {
  return (
    <div>
      <SignupForm />
    </div>
  );
};

export default Signup;

export const metadata = {
  title: "Signup",
  description: "Create a new account",
};
