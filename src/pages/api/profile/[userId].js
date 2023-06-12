import { secureApi } from "@/helpers";

export default function handler(req, res) {
  const { userId } = secureApi(req, res);
  if (userId === parseInt(req.query.userId)) {
    res.send("secured");
  } else {
    res.status(401).send({ error: "Unauthorized access" });
  }
}
