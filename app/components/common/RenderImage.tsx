import { useEffect, useRef, useState } from "react";
import imgDefault from "../../image/imagesDefault.jpg";
export default function RenderImage(props: any) {
  const { src } = props;
  const refImage = useRef<HTMLImageElement>(null);
  const [isLoad, setIsLoad] = useState<Boolean>(false);
  useEffect(() => {
    const image: any = refImage.current;
    if (src) {
      image.onerror = () => {
        setIsLoad(false);
      };
      image.onload = () => {
        setIsLoad(true);
      };
      image.src = src;
    } else {
      image.src = imgDefault;
    }
    return () => {
      image.onerror = null;
      image.onload = null;
    };
  }, [src]);
  return (
    <img ref={refImage} src={isLoad ? src : imgDefault} alt="" {...props} />
  );
}
