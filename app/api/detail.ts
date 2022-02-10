import { getComments } from './comment';

export type Detail = {
  id: string;
  name: string;
  introduction: string;
  likeList: [];
};

export async function getDetailData(params: number) {
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
  const comments = getComments(params);
  const results = await response.json();

  return { comments, results };
}
