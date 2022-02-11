import { useEffect } from 'react';
import { Link, LoaderFunction, useLoaderData, useParams } from 'remix';
import { getDetailData } from '~/api/detail';
import { Film } from '~/api/films';
import { getHomeData, Home } from '~/api/home';
import imgDefault from '../../image/imagesDefault.jpg';

export const loader: LoaderFunction = async () => {
  return getHomeData();
};

export default function movie() {
  const param = useParams();
  console.log('🚀 ~ movie ~ param', param);
  const data = useLoaderData();
  const dataTab: Home[] = data.home.filter(
    (item: Home) => item.homeSectionType !== 'BANNER'
  );
  const allMovie: Home[] = dataTab.filter(
    (item: any) => item.homeSectionId === Number(param.movieId)
  );
  console.log('🚀 ~ movie ~ allMovie', allMovie);

  return (
    <>
      <div className="banners" style={{ width: '100%', height: '90vh' }}>
        <div style={{ width: '100%', height: '90vh' }}>
            <h1>Banner</h1>
          <div>
            {allMovie.map((item: Home, index) => {
              return (
                <div
                  key={index}
                  style={{ color: 'white' }}
                  className="container"
                >
                  <div className="row">
                    <div className="flex-between-center col-12">
                      <div className="flex-between-center">
                        <h1>{item.homeSectionName}</h1>|
                      </div>
                    </div>
                  </div>
                  <div className="row col-12">
                    <div className="container">
                      <div className="row">
                        {item.recommendContentVOList.map(
                          (ele: Film, indexE) => (
                            <div className="col-2 ">
                              <Link
                                to={`/films/${ele.id}`}
                                title={ele.title}
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
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {allMovie.map((item: Home, index) => {
        return (
          <div key={index} style={{ color: 'white' }} className="container">
            <div className="row">
              <div className="flex-between-center col-12">
                <div className="flex-between-center">
                  <h1>{item.homeSectionName}</h1>|
                </div>
              </div>
            </div>
            <div className="row col-12">
              <div className="container">
                <div className="row">
                  {item.recommendContentVOList.map((ele: Film, indexE) => (
                    <div className="col-2 ">
                      <Link
                        to={`/films/${ele.id}`}
                        title={ele.title}
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
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
