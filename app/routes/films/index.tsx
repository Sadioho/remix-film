import { Link, LoaderFunction, useLoaderData } from 'remix';
import { getHomeData } from '~/api/home';
import Banner from '~/components/common/Banner';
import ListFilm from '~/components/common/ListFilm';
import TabLayout from '~/components/templates/TabLayout';

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const keyword = url.searchParams.get('keyword');
  return getHomeData(keyword);
};
export default function Index() {
  const data = useLoaderData();
  const { home: dataHome, dataSearch, keyword } = data;

  return (
    <>
      {dataHome ? (
        <>
          <Banner data={dataHome[0]} />
          <TabLayout data={dataHome} />
        </>
      ) : (
        <ListFilm data={dataSearch.searchResults} />
      )}
    </>
  );
}
