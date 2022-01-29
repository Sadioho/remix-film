import { Link, LoaderFunction, useLoaderData } from "remix";
import { getHomeData, Home } from "~/api/home";
import Banner from "~/components/common/Banner";
import TabLayout from "~/components/templates/TabLayout";

export const loader: LoaderFunction = async () => {
  return getHomeData();
};
export default function Index() {
  const data = useLoaderData();

  return (
    <div className="main-layout">
      <Banner data={data.home[0]} />
      {/* {data.home.map(
        (item: Home) =>
          item.homeSectionType !== "BANNER" && (
            <div key={item.homeSectionId}>{item.homeSectionName}</div>
          )
      )} */}

      <TabLayout data={data} />
      <h1>haha</h1>
      <ul className="pagination">
        <li>
          <Link className="" to="#">
            «
          </Link>
        </li>
        <li>
          <Link to="#" className="active">
            1
          </Link>
        </li>
        <li>
          <Link to="#">2</Link>
        </li>
        <li>
          <Link to="#">3</Link>
        </li>
        <li>
          <Link to="#">»</Link>
        </li>
      </ul>
    </div>
  );
}
