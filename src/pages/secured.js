import { securePage } from "../helpers";

const secured = ({ user }) => {
  return (
    <div>
      <h1>This is a secured page</h1>
      <pre>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </pre>
    </div>
  );
};

export default secured;

export async function getServerSideProps(ctx) {
  const user = securePage(ctx);
  // const hobbies_van_aangemelde_gebruiker = await db
  //   .select("*")
  //   .from("hobbies")
  //   .where("ext_user_id", user.userUuid);
  // console.log(user);
  return {
    props: {
      user,
    },
  };
}
