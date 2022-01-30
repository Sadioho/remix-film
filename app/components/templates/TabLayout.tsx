import { useState } from "react";
import { Film } from "~/api/films";
import { Home } from "~/api/home";
import CardFilm from "../common/CardFilm";

export default function TabLayout(props: any) {
  const { data } = props;
  const dataTab: Home[] = data.home.filter(
    (item: Home) => item.homeSectionType !== "BANNER"
  );
  const active = (index: number) => (index === tab ? "active" : "");
  const [tab, setTab] = useState(0);
  return (
    <div className="tab_layout container-fluid mt-3">
      <div className="row">
        <div className="col-3">
          {dataTab.map((item: Home, index: number) => (
            <div
              className={`tab_layout__name px-3 py-2 ${active(index)}`}
              key={item.homeSectionId}
              onClick={() => setTab(index)}
            >
              {item.homeSectionName}
            </div>
          ))}
        </div>
        <div className="col-9">
          <div className="row">
            {dataTab[tab].recommendContentVOList.map((item: any) => (
              <CardFilm key={item.id} src={item.imageUrl} title={item.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
