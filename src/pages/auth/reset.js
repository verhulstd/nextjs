import Userfront from "@userfront/react";

const ResetForm = Userfront.build({
  toolId: process.env.NEXT_PUBLIC_UIRESETID,
});

const Reset = () => {
  return (
    <div>
      <h1>Reset your password here...</h1>
      <ResetForm />
    </div>
  );
};

export default Reset;
