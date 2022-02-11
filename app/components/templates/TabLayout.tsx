import { useState } from 'react';
import { Home } from '~/api/home';
// import CardFilm from '../common/CardFilm';
import imgDefault from '../../image/imagesDefault.jpg';
import { Film } from '~/api/films';
import { Link } from 'remix';

export default function TabLayout(props: any) {
  const { data } = props;
  const dataTab: Home[] = data.filter(
    (item: Home) => item.homeSectionType !== 'BANNER'
  );
  const active = (index: number) => (index === tab ? 'active' : '');
  const [tab, setTab] = useState(0);
  // const randomNumber = (from: number, to: number) =>
  //   Math.floor(Math.random() * to) + from;
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
      {/* <div className="row">
        {dataTab[tab].recommendContentVOList.map((item: any) => (
          <CardFilm
            key={item.id}
            src={item.imageUrl || imgDefault}
            title={item.title}
            id={item.id}
          />
        ))}
      </div> */}
      {dataTab.map((item: Home, index) => {
        // const num = randomNumber(1, 3) + 1;
        // const textClass = `col-${12 / num}`;
        // console.log("{dataTab.map ~ textClass", textClass);
        // console.log('{dataTab.map ~ item', item.recommendContentVOList);
        return (
          <div key={index} style={{ color: 'red' }} className="row">
            <div className="flex-between-center col-12">
              <div className="flex-between-center">
                <h1>{item.homeSectionName}</h1>|
                <div>Total {item.recommendContentVOList.length} film</div>
              </div>
              <Link to={`/allmovie/${item.homeSectionId}`}>All movie</Link>
            </div>
            {item.recommendContentVOList.map(
              (ele: Film, indexE) =>
                indexE < 6 && (
                  <Link
                    to={`${ele.id}`}
                    title={ele.title}
                    className="col-2"
                    key={indexE}
                    prefetch="intent"
                  >
                    <img
                      src={ele.imageUrl || imgDefault}
                      alt="aa"
                      width="100%"
                      height="auto"
                    />
                  </Link>
                )
            )}
          </div>
        );
      })}
    </div>
  );
}
