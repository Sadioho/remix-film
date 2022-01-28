import { Link } from 'remix';

export default function Index() {
  return (
    <div className='box'>
      <h1>Welcome to Remix</h1>
      <i className="fab fa-500px"></i>
      <Link to="/detail">Detailfff</Link>
    </div>
  );
}
