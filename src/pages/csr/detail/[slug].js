import { useRouter } from "next/router";

const Detail = () => {
  const {
    query: { slug },
  } = useRouter();
  const id = slug.split("-")[0];
  return (
    <>
      <h1>Detail of Cocktail using CSR</h1>
      <h2>id : {id}</h2>
    </>
  );
};

export default Detail;
