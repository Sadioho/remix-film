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
    <div>
      <h1>Welcome to Remix</h1>
      <Carousel dotPosition="bottom">
        {films.map((item) => (
          <div key={item?.id}>
            <h3 style={contentStyle}>{item.original_title}</h3>
          </div>
        ))}
      </Carousel>

      <Link to="/detail">Films</Link>
    </div>
  );
}
