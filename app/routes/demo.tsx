import { useLoaderData } from 'remix';
export const loader = async () => {
  console.log('AHIHIHI');
  return null
};
export default function Demo() {
  const data = useLoaderData();
  console.log('data', data);

  return (
    <div>
      <h1>Defasdfsadfmo</h1>
    </div>
  );
}
