import Userfront from "@userfront/react";

const LogoutButton = Userfront.build({
  toolId: process.env.NEXT_PUBLIC_UILOGOUTID,
});

const Logout = () => {
  return (
    <div>
      <h1>Click on button below to logout...</h1>
      <LogoutButton />
    </div>
  );
};

export default Logout;
