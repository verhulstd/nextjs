import Userfront from "@userfront/react";

const SignupForm = Userfront.build({
  toolId: process.env.NEXT_PUBLIC_UISIGNUPID,
});

const Signup = () => {
  return (
    <div>
      <h1>Register here...</h1>
      <SignupForm />
    </div>
  );
};

export default Signup;
