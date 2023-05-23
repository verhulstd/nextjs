const friends = await db.select("*").from("friends");
const friendsWithHobbies = await Promise.all(
  friends.map(async (f) => ({
    friend: f,
    hobbies: await db("friends_has_hobbies")
      .join("hobbies", "hobbies.id", "friends_has_hobbies.hobbies_id")
      .select("hobbies.hobby", "hobbies.id")
      .where("friends_has_hobbies.friends_id", f.id),
  }))
);
