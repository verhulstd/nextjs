/* eslint-disable @next/next/no-img-element */
import { slug } from "@/helpers";
const Detail = ({ cocktail }) => {
  return (
    <>
      <h1>test</h1>
      <h1>Detail of Cocktail using Incremental Static Regeneration</h1>
      {cocktail?.strDrink && (
        <>
          <h2>
            {cocktail.strDrink} - {cocktail.idDrink}
          </h2>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          <p>{cocktail.strInstructions}</p>
        </>
      )}
    </>
  );
};

export async function getStaticPaths() {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
  );
  const { drinks: cocktails } = await response.json();
  return {
    paths: cocktails.map((c) => {
      return {
        params: {
          slug: `${c.idDrink}-${slug(c.strDrink)}`,
        },
      };
    }),
    fallback: true,
    revalidate: 60 * 60 * 24,
  };
}

export async function getStaticProps({ params }) {
  const id = params.slug.split("-")[0];
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const { drinks } = await response.json();
  return {
    props: {
      cocktail: drinks[0],
    },
  };
}

export default Detail;
