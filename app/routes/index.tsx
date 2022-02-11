import { Link, LoaderFunction, useLoaderData } from "remix";
import { getHomeData, Home } from "~/api/home";
import Banner from "~/components/common/Banner";
import TabLayout from "~/components/templates/TabLayout";

export const loader: LoaderFunction = async () => {
  return getHomeData();
};
export default function Index() {
  const data = useLoaderData();
  const dataHome = data.home;
  return (
    <>
      <Banner data={dataHome[0]} />
      <TabLayout data={dataHome} />
      {/* <ul className="pagination">
        <li>
          <Link className="" to="#">
            «
          </Link>
        </li>
        <li>
          <Link to="/1" className="active">
            1
          </Link>
        </li>
        <li>
          <Link to="/2">2</Link>
        </li>
        <li>
          <Link to="/3">3</Link>
        </li>
        <li>
          <Link to="#">»</Link>
        </li>
      </ul> */}
    </>
  );
}
