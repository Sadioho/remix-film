import { LoaderFunction, redirect } from "remix";

export const loader: LoaderFunction = async ({ request }) => {
  let url = new URL(request.url);
  return redirect(`/detail/${url.search}`);
};
