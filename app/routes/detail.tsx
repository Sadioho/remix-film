import { useLoaderData } from 'remix';
export const loader = async () => {
  console.log('AHIHIHI');
  return null;
};
export default function Detail() {
  const data = useLoaderData();
  console.log('data', data);

  return (
    <div>
      <h1>Detail</h1>
    </div>
  );
}
