import { LoaderFunction, useCatch, useLoaderData } from "remix";

export let loader: LoaderFunction = async () => {
  // const response = await fetch(`http://localhost:3002/comments`);
  // const comments = await response.json();
  // throw json('Different message ', { status: 404 });
  // throw new Response('Not Found', { status: 404, statusText: 'Not Found' });
  // throw new Error('RANDOM ERROR!!!');
  return null;
};
export default function Character() {
  return <h1>DEMO ERROR BOUNDARY</h1>;
}

export function CatchBoundary() {
  const caught = useCatch();
  console.log("🚀 ~ CatchBoundary ~ caught", caught);

  if (caught.status === 404) {
    return (
      <div className="error-box">
        <div>CatchBoundary</div>
        {caught.statusText}
        <p>
          {caught.status} {caught.statusText}
        </p>
      </div>
    );
  }

  throw new Error("Unkown error");
}

export function ErrorBoundary({ error }: any) {
  return (
    <div className="error-box">
      <div>ErrorBoundary</div>
      Uh oh... Sorry something went wrong!
      <p>{error?.message}</p>
    </div>
  );
}
