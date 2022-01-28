import { Link, LoaderFunction, useLoaderData } from "remix";
import { getHomeData, Home } from "~/api/home";
import Banner from "~/components/common/Banner";

export const loader: LoaderFunction = async () => {
  return getHomeData();
};
export default function Index() {
  const data = useLoaderData();
  return (
    <div className="main-layout">
      {data.home.map(
        (item: Home) =>
          item.homeSectionType === "BANNER" && (
            <Banner key={item.homeSectionId} data={item} />
          )
      )}

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
