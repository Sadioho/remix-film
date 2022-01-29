export default function CardFilm(props: any) {
  return (
    <div className="col-3 card_film p-1">
      <img className="card_film__image" src={props.src} alt="image film" />
      <div className="card_film__title">{props.title}</div>
    </div>
  );
}
