export type Detail = {
  id: string;
  name: string;
  introduction: string;
  likeList: [];
};

export type DetailV2 = {
  id?: string;
  name?: string;
  introduction?: string;
  coverHorizontalUrl?:string,
  coverVerticalUrl?:string,
};
export async function getDetailData(params: string) {
  const response = await fetch(
    `https://ga-mobile-api.loklok.tv/cms/app/movieDrama/get?id=${params}&category=1`,
    {
      method: 'get',
      headers: {
        lang: 'en',
        versioncode: '11',
        clienttype: 'ios_jike_default',
      },
    }
  );
  const response2 = await fetch(
    `http://localhost:3002/comments?filmId=${params}`
  );
  const comments = await response2.json();
  const results = await response.json();

  return { comments: comments, results: results.data };
}
