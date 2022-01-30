import type { LinksFunction, MetaFunction } from "remix";
import { Links, LiveReload, Meta, Scripts, ScrollRestoration } from "remix";
import MainLayout from "./components/templates/MainLayout";
import styles from "./sass/style.css";

const fontAwesome =
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: fontAwesome },
    { rel: "stylesheet", href: styles },
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
export function ErrorBoundary({ error }: any) {
  console.error(error);
  return (
    <html>
      <head>
        <title>Có lỗi rồi!</title>
        <Meta />
        <Links />
      </head>
      <body>
        {error.message}
        <Scripts />
      </body>
    </html>
  );
}
