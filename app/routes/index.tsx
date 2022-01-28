import { Carousel } from "antd";
import { Link, LoaderFunction, useLoaderData } from "remix";
import { Film, getFilms } from "~/api/films";

//SERVER SIDE
export const loader: LoaderFunction = async () => {
  return getFilms();
};
//CLIENT SIDE
const contentStyle: Object = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
export default function Index() {
  const films = useLoaderData<Film[]>();
  return (
    <div className="box">
      <h1>Welcome to Remix</h1>
      <i className="fab fa-500px"></i>
      <Link to="/detail">Detailfff</Link>
    </div>
  );
}
