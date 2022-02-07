import { useEffect, useRef, useState } from "react";
import imgDefault from "../../image/imagesDefault.jpg";
export default function RenderImage(props: any) {
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
    <img ref={refImage} src={isLoad ? path : imgDefault} alt="" {...props} />
  );
}
