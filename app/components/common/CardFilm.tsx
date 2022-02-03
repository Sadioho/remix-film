import { Link } from 'remix';

export default function CardFilm(props: any) {
  return (
    <Link to={props.id} className="col-3 p-3">
      <div className="card_film">
        <img className="card_film__image" src={props.src} alt="image film" />
        <div className="card_film__title">{props.title}</div>
      </div>
    </Link>
  );
}
