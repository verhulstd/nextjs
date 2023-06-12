import { useState } from "react";
import UserFront from "@userfront/react";

const LoginMagicLink = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const sendMagicLink = () => {
    UserFront.signup({
      method: "passwordless",
      email,
      name,
      data: {
        hobby: "Tafeltennis",
      },
    });
  };
  return (
    <div>
      <label>
        e-mail:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        name:
        <input
          type="email"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <button onClick={sendMagicLink}>send magiclink</button>
    </div>
  );
};

export default LoginMagicLink;
