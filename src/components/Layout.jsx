import { useUser } from "@/helpers";
import Link from "next/link";
import { useRouter } from "next/router";
import Userfront from "@userfront/react";
const Layout = ({ children }) => {
  const { locale, locales, asPath } = useRouter();
  const user = useUser(Userfront);
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/csr">Client Side Rendering</Link>
          </li>
          <li>
            <Link href="/ssr">Server Side Rendering</Link>
          </li>
          <li>
            <Link href="/ssg">Static Site Generation</Link>
          </li>
          <li>
            <Link href="/isr">Incremental Static Regeneration</Link>
          </li>
          <li>
            <Link href="/friends">Mysql Friends + api page</Link>
          </li>
          {user?.userUuid && (
            <li>
              <Link href="/secured">secured page</Link>
            </li>
          )}
        </ul>
      </nav>
      <ol>
        {locales.map((l) => (
          <li key={l}>
            <Link
              className={locale === l ? "active" : ""}
              href={asPath}
              locale={l}>
              {l}
            </Link>
          </li>
        ))}
      </ol>
      <ol>
        {!user?.username && (
          <li>
            <Link href="/auth/login">login</Link>
          </li>
        )}
        {!user?.username && (
          <li>
            <Link href="/auth/reset">reset</Link>
          </li>
        )}
        {!user?.username && (
          <li>
            <Link href="/auth/signup">register</Link>
          </li>
        )}
        {user?.username && (
          <li>
            <Link href="/auth/logout">logout</Link>
          </li>
        )}
        {user?.username && (
          <li>
            <Link href="/auth/profile">{user.name}</Link>
          </li>
        )}
      </ol>
      {children}
    </main>
  );
};

export default Layout;
