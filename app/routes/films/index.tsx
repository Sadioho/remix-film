import { Link, LoaderFunction, useLoaderData } from "remix";
import { getHomeData, Home } from "~/api/home";
import Banner from "~/components/common/Banner";
import ListFilm from "~/components/common/ListFilm";
import TabLayout from "~/components/templates/TabLayout";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const keyword = url.searchParams.get("keyword");
  return getHomeData(keyword);
};
export default function Index() {
  const data = useLoaderData();
  const { home: dataHome, dataSearch, keyword } = data;
  const dataBanner =
    !keyword &&
    dataHome
      .filter((list: Home) => list.homeSectionType === "BANNER")
      .filter((item: Home) => item.recommendContentVOList.length > 5);
  return (
    <>
      {dataHome ? (
        <>
          <Banner data={dataBanner[0]} />
          <TabLayout data={dataHome} />
        </>
      ) : (
        <ListFilm data={dataSearch.searchResults} keyword={keyword} />
      )}
    </>
  );
}
