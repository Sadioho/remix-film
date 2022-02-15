import { useEffect, useState } from "react";
import { Home } from "~/api/home";
import CardFilm from "../common/CardFilm";
import imgDefault from "../../image/imagesDefault.jpg";
import { Film } from "~/api/films";
import { Link } from "remix";

export default function TabLayout(props: any) {
  const { data } = props;
  const dataTab: Home[] = data.filter(
    (item: Home) => item.homeSectionType !== "BANNER"
  );
  const [tab, setTab] = useState(0);
  const active = (index: number) => (index === tab ? "active-cat" : "");
  return (
    <div className="tab_layout container">
      <div className="tabfilm">
        <div className="tabfilm__icon">
          <i className="fas fa-cog fa-spin"></i>
        </div>
        <div className="tabfilm__list">
          <ul>
            {/* {dataTab.map((item: Home, index: number) => (
              <li className={active(index)} key={item.homeSectionId}>
                <Link
                  to={`/films#section${item.homeSectionId}`}
                  title={item.homeSectionType}
                  onClick={() => setTab(index)}
                  id={"cate" + item.homeSectionId}
                >
                  {item.homeSectionName}
                </Link>
              </li>
            ))} */}
          </ul>
        </div>
      </div>
      {dataTab.map((item: Home, index) => {
        return (
          <div
            key={index}
            style={{ color: "rgb(117, 117, 243)" }}
            className="row section-name-film"
            id={`section${item.homeSectionId}`}
          >
            <div className="flex-between-center col-12 my-3">
              <div className="flex-between-center">
                <h1>{item.homeSectionName}</h1>|
                <div>Total {item.recommendContentVOList.length} film</div>
              </div>
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
                to={`/allmovie/${item.homeSectionId}`}
              >
                All movie
              </Link>
            </div>
            {item.recommendContentVOList.map(
              (ele: Film, indexE) =>
                indexE < 6 && (
                  <CardFilm
                    key={ele.id}
                    src={ele.imageUrl || imgDefault}
                    title={ele.title}
                    id={ele.id}
                  />
                )
            )}
          </div>
        );
      })}
    </div>
  );
}
