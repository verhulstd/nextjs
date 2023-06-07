import Userfront from "@userfront/react";
import { useUser } from "@/helpers";

const Profile = () => {
  const user = useUser(Userfront);
  return (
    <div>
      <h1>your profile</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default Profile;
