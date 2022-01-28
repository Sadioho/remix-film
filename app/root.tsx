import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
<<<<<<< HEAD
} from "remix";
import type { MetaFunction } from "remix";
import MainLayout from "./components/templates/MainLayout";
import stylesRoot from "./root.css";
import styles from "antd/dist/antd.css";
=======
} from 'remix';
import type { MetaFunction } from 'remix';

import styles from './sass/style.css';
>>>>>>> 457da2a1845caf17a2b7a2089659b5d5eb29a7e5

const fontAwesome =
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: fontAwesome },
  ];
};
export const meta: MetaFunction = () => {
  return { title: "Remix Film" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <MainLayout />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
