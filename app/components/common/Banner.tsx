import { useEffect, useRef } from 'react';
import { Link } from 'remix';
import { Film } from '~/api/films';
import RenderImage from './CardFilm';
function cutString(data: string) {
  let start = data.indexOf('id=');
  let end = data.indexOf('&');
  let id = data.slice(start + 3, end);
  return id;
}
export default function Banner(props: any) {
  const { data } = props;

  const films = data.recommendContentVOList;

  // console.log('🚀 ~ Banner ~ films', films);
  const refDrag = useRef<HTMLDivElement>(null);
  const refSpin = useRef<HTMLDivElement>(null);
  const refGround = useRef<HTMLDivElement>(null);
  let radius = 480; // vòng tròn ảnh
  const autoRotate = true; // xoay
  const rotateSpeed = -60; // unit: seconds/360 degrees
  let imgWidth = 400; // width
  let imgHeight = 250; // height

  useEffect(() => {
    const odrag = refDrag.current;
    const circleSpin = refSpin.current;
    const ground = refGround.current;
    const images: any = circleSpin?.getElementsByClassName('item-carousel');
    const elements = [...images]; // arrays
    const init = (delayTime: any) => {
      elements.map((item, index) => {
        item.style.transform =
          'rotateY(' +
          index * (360 / elements.length) +
          'deg) translateZ(' +
          radius +
          'px)';
        item.style.transition = 'transform 1s';
        item.style.transitionDelay =
          delayTime || (elements.length - index) / 4 + 's';
      });
    };
    if (odrag) odrag.style.transform = 'rotateX(0deg) rotateY(0deg)';

    setTimeout(init, 1000);

    // Size of images
    if (circleSpin) {
      circleSpin.style.width = imgWidth + 'px';
      circleSpin.style.height = imgHeight + 'px';
    }
    // Size of ground - depend on radius
    if (ground) {
      ground.style.width = radius * 3 + 'px';
      ground.style.height = radius * 3 + 'px';
    }

    // auto spin
    if (autoRotate) {
      const animationName = rotateSpeed > 0 ? 'spin' : 'spinRevert';
      if (circleSpin)
        circleSpin.style.animation = `${animationName} ${Math.abs(
          rotateSpeed
        )}s infinite linear`;
    }

    // setup events
    let desX = 0,
      desY = 0,
      tX = 0,
      tY = 10;
    const applyTranform = (obj: any) => {
      // Constrain the angle of camera (between 0 and 180)
      if (tY > 180) tY = 180;
      if (tY < 0) tY = 0;

      // Apply the angle
      obj.style.transform = 'rotateX(' + -tY + 'deg) rotateY(' + tX + 'deg)';
    };

    const playSpin = (yes: any) => {
      if (circleSpin)
        circleSpin.style.animationPlayState = yes ? 'running' : 'paused';
    };
    document.onpointerdown = (e) => {
      let sX = e.clientX,
        sY = e.clientY;
      // thả chuột
      document.onpointermove = (e) => {
        const nX = e.clientX,
          nY = e.clientY;
        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTranform(odrag);
        sX = nX;
        sY = nY;
      };
      // nhấn chuột
      document.onpointerup = (e) => {
        setInterval(() => {
          desX *= 0.95;
          desY *= 0.95;
          tX += desX * 0.1;
          tY += desY * 0.1;
          applyTranform(odrag);
          playSpin(false);
          if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
            playSpin(true);
          }
        }, 17);
        document.onpointermove = document.onpointerup = null;
      };
      return false;
    };

    // // xoay lăn chuột
    // document.onwheel = (e) => {
    //   const d = e.deltaY / 20 || -e.detail;
    //   radius < 250
    //     ? (radius = 250)
    //     : radius > 550
    //     ? (radius = 550)
    //     : (radius += d);
    //   imgWidth += d / 2;

    //   if (circleSpin) {
    //     if (imgWidth < 250) imgWidth = 250;
    //     if (imgWidth > 450) imgWidth = 450;
    //     circleSpin.style.width = imgWidth + "px";
    //   }

    //   init(1);
    // };

    return () => {
      document.onpointermove =
        document.onpointerup =
        document.onpointerdown =
          null;
    };
  }, []);

  return (
    <div className="box_3D">
      <div ref={refDrag} className="box_3D_container container_3D">
        <div ref={refSpin} className="container_3D">
          {films.map((item: Film) => (
            <Link
              to={cutString(item.jumpAddress)}
              title={item.title}
              key={item.id}
              className="box_3D_container__item item-carousel"
            >
              <img src={item.imageUrl} alt={item.title || 'image carousel'} />
              <p className="name-movie py-1">{item.title}</p>
            </Link>
          ))}
          <p className="author">HAM6 BLUE CAROUSEL</p>
        </div>
        <div id="ground" ref={refGround}></div>
      </div>
    </div>
  );
}
