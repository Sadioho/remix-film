import { Link } from 'remix';

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Welcome to Remix</h1>
      <Link to="/detail">Detailfff</Link>
    </div>
  );
}