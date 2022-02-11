import { LoaderFunction, useLoaderData } from 'remix';
import { getHomeData } from '~/api/home';
export const loader: LoaderFunction = async () => {
  return getHomeData();
};
export default function Index() {
  const data = useLoaderData();
  console.log('🚀 ~ Index ~ data', data);
  return <h1>Show all</h1>;
}
