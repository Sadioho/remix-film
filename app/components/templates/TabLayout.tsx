import { useState } from "react";
import { Link } from "remix";
import { Home } from "~/api/home";
import RenderImage from "../common/RenderImage";

export default function TabLayout(props: any) {
  const { data } = props;
  const dataTab: Home[] = data.filter(
    (item: Home) => item.homeSectionType !== "BANNER"
  );
  const active = (index: number) => (index === tab ? "active" : "");
  const [tab, setTab] = useState(0);
  return (
    <div className="tab_layout container-fluid">
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
        <div className="col-9  mt-3g">
          <div className="row">
            {dataTab[tab].recommendContentVOList.map((item: any) => (
              <Link
                to={`/detail?id=${item.id}`}
                title={item.title}
                className="col-2 p-3"
                key={item.id}
              >
                <div className="card_film">
                  <RenderImage
                    src={item.imageUrl}
                    className="card_film__image"
                    alt={item.title || "image"}
                  />
                  <div className="card_film__title">{item.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
