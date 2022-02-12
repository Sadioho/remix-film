import { Film } from './films';

export type Home = {
  homeSectionId: number;
  homeSectionName: string;
  homeSectionType: string;
  recommendContentVOList: Film[];
  refId: number;
};

export async function getHomeData() {
  const response = await fetch(
    'https://ga-mobile-api.loklok.tv/cms/app/homePage/getHome?page=0',
    {
      method: 'get',
      headers: {
        lang: 'vi',
        versioncode: '11',
        clienttype: 'ios_jike_default',
      },
    }
  );
  const results = await response.json();

  const home: Home[] = results.data.recommendItems;
  const page = results.data.page;
  return { page, home };
}

// search
export async function searchMovie(params: string) {
  const raw = {
    searchKeyWord: params,
    size: 50,
    sort: '',
    searchType: '',
  };
  const response = await fetch(
    'https://ga-mobile-api.loklok.tv/cms/app/search/v1/searchWithKeyWord',
    {
      method: 'post',
      headers: {
        lang: 'vi',
        versioncode: '11',
        clienttype: 'ios_jike_default',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(raw),
    }
  );
  const results = await response.json();
  const data = results.data;

  return data;
}
