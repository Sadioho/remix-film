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
            {dataTab.map((item: Home, index: number) => (
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
            ))}
          </ul>
        </div>
      </div>
      {dataTab.map((item: Home, index) => {
        return (
          <div key={index} className="row" id={`section${item.homeSectionId}`}>
            <div className="flex-between-center col-12 my-3 title_tab">
              <div className="flex-between-center">
                <h1 className="title_tab__name">{item.homeSectionName}</h1>
                <span className="title_tab__space mx-4">|</span>
                <div className="title_tab__total">
                  Total {item.recommendContentVOList.length} movies
                </div>
              </div>
              <Link
                className="title_tab__allmovie"
                to={`/allmovie/${item.homeSectionId}`}
              >
                All movies
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
