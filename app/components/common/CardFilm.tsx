import { useEffect, useRef, useState } from 'react';
import { Link } from 'remix';
import imgDefault from '../../image/imagesDefault.jpg';
export default function CardFilm(props: any) {
  const path = props.src;
  const refImage = useRef<HTMLImageElement>(null);
  const [isLoad, setIsLoad] = useState<Boolean>(false);
  useEffect(() => {
    const image: any = refImage.current;
    if (path) {
      image.onerror = () => {
        setIsLoad(false);
      };
      image.onload = () => {
        setIsLoad(true);
      };
      image.src = path;
    } else {
      image.src = imgDefault;
    }
    return () => {
      image.onerror = null;
      image.onload = null;
    };
  }, [path]);
  return (
    <Link to={`/detail?id=${props.id}`} title={props.title} className="col-2 p-3">
      <div className="card_film">
        <img
          ref={refImage}
          src={isLoad ? path : imgDefault}
          className="card_film__image"
          alt="image film"
        />
        <div className="card_film__title">{props.title}</div>
      </div>
    </Link>
  );
}
