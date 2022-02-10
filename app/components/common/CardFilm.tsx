import { useEffect, useRef } from "react";
import { Link } from "remix";
import imgDefault from "../../image/imagesDefault.jpg";
export default function CardFilm(props: any) {
  const { src } = props;
  const refImage = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const image: any = refImage.current;
    if (src) {
      image.onerror = () => {
        image.src = imgDefault;
      };
      image.onload = () => {
        image.src = src;
      };
      image.src = imgDefault;
    } else {
      image.src = imgDefault;
    }
    return () => {
      image.onerror = null;
      image.onload = null;
    };
  }, [src]);
  return (
    <Link
      to={`/detail?id=${props.id}`}
      title={props.title}
      className="col-2 p-3"
    >
      <div className="card_film">
        <img
          ref={refImage}
          className="card_film__image"
          alt={props.title || "image film"}
        />
        <div className="card_film__title">{props.title}</div>
      </div>
    </Link>
  );
}
