/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { slug } from "@/helpers";
const index = ({ cocktails }) => {
  return (
    <div>
      <h1>Retrieving cocktails with Server Side Rendering</h1>
      <h2>CONTRA</h2>
      <ol>
        <li>if cocktailapi down =&gt; no cocktails</li>
        <li>10.000 users =&gt; 10.000 api calls (no caching)</li>
      </ol>
      <h2>PRO</h2>
      <ol>
        <li>no loading UI</li>
        <li>fetch handled by server : faster</li>
        <li>SEO !!! page got all the html on pageload</li>
      </ol>
      <div className="cocktails">
        {cocktails.map(({ idDrink, strDrinkThumb, strDrink }) => (
          <article key={idDrink}>
            <Link href={`/ssr/detail/${idDrink}-${slug(strDrink)}`}>
              <img src={strDrinkThumb} alt={strDrink} />
              <p>{strDrink}</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
  );
  const { drinks: cocktails } = await response.json();
  return {
    props: {
      cocktails,
    },
  };
}

export default index;
