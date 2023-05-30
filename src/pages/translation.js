import { useTranslation } from "../helpers";
const Translation = () => {
  const t = useTranslation();
  return (
    <>
      <h1>{t("welcome")}</h1>
      <button>{t("cta")}</button>
    </>
  );
};

export default Translation;
