import { Film } from "./films";

export type Home = {
  homeSectionId: number;
  homeSectionName: string;
  homeSectionType: string;
  recommendContentVOList: Film[];
  refId: number;
};

export async function getHomeData() {
  const response = await fetch(
    "https://ga-mobile-api.loklok.tv/cms/app/homePage/getHome?page=0",
    {
      method: "get",
      headers: {
        lang: "vi",
        versioncode: "11",
        clienttype: "ios_jike_default",
      },
    }
  );
  const results = await response.json();

  const home: Home[] = results.data.recommendItems;
  const page = results.data.page;

  return { page, home };
}
