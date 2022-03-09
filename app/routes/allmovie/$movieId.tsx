import { useEffect, useState } from "react";
import { Link, LoaderFunction, useLoaderData, useParams } from "remix";
import { Detail, DetailV2 } from "~/api/detail";
import CardFilm from "../../components/common/CardFilm";
import { Film } from "~/api/films";
import { getHomeData, Home } from "~/api/home";
import imgDefault from "../../image/imagesDefault.jpg";
import imageBannerDetail from "../../image/imageBannerDetail.jpg";
export const loader: LoaderFunction = async () => {
  return getHomeData();
};

export default function movie() {
  const param = useParams();
  const [dataDetail, setDataDetail] = useState({});
  const data = useLoaderData();

  const dataTab: Home[] = data.home.filter(
    (item: Home) => item.homeSectionType !== "BANNER"
  );
  const allMovie: Home[] = dataTab.filter(
    (item: any) => item.homeSectionId === Number(param.movieId)
  );
  const details: DetailV2 = dataDetail;
  useEffect(() => {
    fetch(
      `https://ga-mobile-api.loklok.tv/cms/app/movieDrama/get?id=${allMovie[0].recommendContentVOList[0].id}&category=1`,
      {
        method: "get",
        headers: {
          lang: "en",
          versioncode: "11",
          clienttype: "ios_jike_default",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => setDataDetail(response.data))
      .catch((error) => console.log(error));
  }, []);
  const introduction =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cupiditate hic itaque impedit. Quas, quia incidunt. In sequi molestiae et ex facere, repellendus itaque temporibus?";
  return (
    <>
      <div className="banner">
        <div className="banner_detail">
          <img
            className="banner_img"
            src={details?.coverHorizontalUrl || imageBannerDetail}
            alt="image banner showall film"
          />
        </div>
        <div className="container">
          <div className="row banner_content">
            <div className="col-6">
              <div className="banner-left">
                <h2 className="title">
                  {details?.name || allMovie[0].homeSectionName}
                </h2>
                <p className="description">
                  {details?.introduction || introduction}
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="banner-right">
                <img
                  className="img"
                  src={details?.coverVerticalUrl || imgDefault}
                  alt="img avatar film"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {allMovie.map((item: Home, index) => {
        return (
          <div key={index} style={{ color: "white" }} className="container">
            <div className="row">
              <div className="flex-between-center col-12 m-2">
                <h1>{item.homeSectionName}</h1>
                <h4>Total: {item.recommendContentVOList.length}</h4>
              </div>
            </div>
            <div className="row">
              {item.recommendContentVOList.map((ele: Film) => (
                <CardFilm
                  key={ele.id}
                  src={ele.imageUrl || imgDefault}
                  title={ele.title}
                  id={ele.id}
                  allFilm
                />
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}
