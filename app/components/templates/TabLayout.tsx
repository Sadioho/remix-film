import { useState } from "react";
import { Home } from "~/api/home";
import CardFilm from "../common/CardFilm";
import imgDefault from "../../image/imagesDefault.jpg";

export default function TabLayout(props: any) {
  const { data } = props;
  const dataTab: Home[] = data.filter(
    (item: Home) => item.homeSectionType !== "BANNER"
  );
  const active = (index: number) => (index === tab ? "active" : "");
  const [tab, setTab] = useState(0);
  return (
    <div className="tab_layout container">
      <div className="tabfilm">
        <div className="tabfilm__icon">
          <i className="fas fa-cog fa-spin"></i>
        </div>
        <div className="tabfilm__list">
          <ul>
            {dataTab.map((item: Home, index: number) => (
              <li
                className={active(index)}
                key={item.homeSectionId}
                onClick={() => setTab(index)}
              >
                <a title={item.homeSectionType} href={`/#active${index}`}>
                  {item.homeSectionName}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row">
        {dataTab[tab].recommendContentVOList.map((item: any) => (
          <CardFilm
            key={item.id}
            src={item.imageUrl || imgDefault}
            title={item.title}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}
