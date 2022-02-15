import { Link, LoaderFunction, useLoaderData } from "remix";
import { getHomeData } from "~/api/home";
import Banner from "~/components/common/Banner";
import TabLayout from "~/components/templates/TabLayout";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const keyword = url.searchParams.get("keyword");
  return getHomeData(keyword);
};
export default function Index() {
  const data = useLoaderData();
  const { home: dataHome, dataSearch, keyword } = data;
  console.log("Index ~ keyword", keyword);
  console.log("Index ~ search", dataSearch);

  return (
    <>
      {dataHome ? (
        <>
          <Banner data={dataHome[0]} />
          <TabLayout data={dataHome} />
        </>
      ) : (
        <p style={{ color: "white" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
          error dolorum aliquid expedita, totam iusto blanditiis suscipit
          molestias? Vero molestiae hic quisquam quidem. Dolores, voluptas!
        </p>
      )}

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
