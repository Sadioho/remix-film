import imgDefault from "../../image/imagesDefault.jpg";
import CardFilm from "../common/CardFilm";

export default function ListFilm(props: any) {
  const { data, keyword } = props;
  console.log("🚀 ~ ListFilm ~ data", data);

  return (
    <div
      className="container pt-3"
      style={{ color: "white", minHeight: "80vh", width: "100%" }}
    >
      {keyword && <h1>Search results for "{keyword}"</h1>}
      <div className="row">
        {data.length > 0 ? (
          data.map((item: any) => {
            return (
              <CardFilm
                key={item.id}
                src={item.coverVerticalUrl || imgDefault}
                title={item.name}
                id={item.id}
              />
            );
          })
        ) : (
          <div className="flex-between-center" style={{ alignItems: "center" }}>
            <h1>👻👻👻</h1>
          </div>
        )}
      </div>
    </div>
  );
}
