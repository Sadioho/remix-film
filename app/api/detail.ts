export type Detail = {};

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
  const results = await response.json();
  // console.log(results.data);

  return results;
}
