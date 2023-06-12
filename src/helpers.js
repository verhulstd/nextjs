import slugify from "slugify";
import { useRouter } from "next/router";
import translations from "./i18n";
import { useState, useEffect } from "react";
import nookies, { parseCookies } from "nookies";
const jwt = require("jsonwebtoken");

export const slug = (str) =>
  slugify(str, {
    replacement: "-", // replace spaces with replacement character, defaults to `-`
    remove: undefined, // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    strict: false, // strip special characters except replacement, defaults to `false`
    locale: "vi", // language code of the locale to use
    trim: true, // trim leading and trailing replacement chars, defaults to `true`
  });

const NestHydrationJS = require("nesthydrationjs")();
export const nest = NestHydrationJS.nest;

export const useTranslation = () => {
  const { locale } = useRouter();

  return (str) => {
    if (!translations[locale][str])
      throw `translation(${locale}) label(${str}) not known`;
    return translations[locale][str];
  };
};

export const useUser = (UserFront) => {
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(UserFront.user);
  }, [UserFront.user]);
  return user;
};

//voor in serversideprops
export const securePage = (ctx) => {
  const cookies = nookies.get(ctx);
  const token = cookies[`access.${process.env.NEXT_PUBLIC_USERFRONTID}`];
  //if token does not exist
  if (!token) {
    redirectToLogin(ctx);
    return null;
  }
  const verifiedPayload = jwt.verify(
    token,
    Buffer.from(process.env.CERTIFICATE, "base64"),
    {
      algorithms: ["RS256"],
    }
  );
  //if token is invalid
  if (!verifiedPayload) {
    redirectToLogin(ctx);
    return null;
  } else {
    return verifiedPayload;
  }
};

function redirectToLogin(ctx) {
  const { res } = ctx;
  res.setHeader("location", "/auth/login");
  res.statusCode = 302;
  res.end();
}

export const secureApi = (req, res) => {
  const cookies = parseCookies({ req });
  //token in cookies or in header?
  const token =
    cookies[`access.${process.env.NEXT_PUBLIC_USERFRONTID}`] ||
    req.headers.authorization?.split(" ")[1];
  if (token) {
    try {
      const verifiedPayload = jwt.verify(
        token,
        Buffer.from(process.env.CERTIFICATE, "base64"),
        {
          algorithms: ["RS256"],
        }
      );
      return verifiedPayload;
    } catch (error) {
      res.status(401).send({ error: "Unauthorized access" });
    }
  } else {
    res.status(401).send({ error: "Unauthorized access" });
  }
};
