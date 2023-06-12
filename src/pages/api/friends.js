import { secureApi } from "@/helpers";

const friends = ["pol", "piet", "loes"];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.json(friends);
  }
  if (req.method === "POST") {
    const { userId } = secureApi(req, res);
    friends.push(req.body.friendName);
  }
}
