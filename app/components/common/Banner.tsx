import React, { useEffect, useRef, useState } from "react";
import { Film } from "~/api/films";

export default function Banner(props: any) {
  const { data } = props;
  const films = data.recommendContentVOList;
  const refDrag = useRef<HTMLDivElement>(null);
  const refSpin = useRef<HTMLDivElement>(null);
  const refGround = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let radius = 480; // vòng tròn ảnh
    const autoRotate = true; // xoay
    const rotateSpeed = -60; // unit: seconds/360 degrees
    let imgWidth = 400; // width
    let imgHeight = 250; // height
    let desX = 0,
      desY = 0,
      tX = 0,
      tY = 10;
    const odrag = refDrag.current;
    const circleSpin = refSpin.current;
    const images: any = circleSpin?.getElementsByClassName("item-carousel");
    const elements = [...images]; // arrays
    const ground = refGround.current;

    const init = (delayTime: any) => {
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.transform =
          "rotateY(" +
          i * (360 / elements.length) +
          "deg) translateZ(" +
          radius +
          "px)";
        elements[i].style.transition = "transform 1s";
        elements[i].style.transitionDelay =
          delayTime || (elements.length - i) / 4 + "s";
      }
    };
    if (odrag) odrag.style.transform = "rotateX(0deg) rotateY(0deg)";

    setTimeout(init, 1000);

    // Size of images
    if (circleSpin) {
      circleSpin.style.width = imgWidth + "px";
      circleSpin.style.height = imgHeight + "px";
    }
    // Size of ground - depend on radius
    if (ground) {
      ground.style.width = radius * 3 + "px";
      ground.style.height = radius * 3 + "px";
    }

    const applyTranform = (obj: any) => {
      // Constrain the angle of camera (between 0 and 180)
      if (tY > 180) tY = 180;
      if (tY < 0) tY = 0;

      // Apply the angle
      obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
    };

    const playSpin = (yes: any) => {
      if (circleSpin)
        circleSpin.style.animationPlayState = yes ? "running" : "paused";
    };

    // auto spin
    if (autoRotate) {
      const animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
      if (circleSpin)
        circleSpin.style.animation = `${animationName} ${Math.abs(
          rotateSpeed
        )}s infinite linear`;
    }

    // setup events
    document.onpointerdown = (e) => {
      // clearInterval(odrag.timer);
      e = e || window.event;
      let sX = e.clientX,
        sY = e.clientY;

      document.onpointermove = (e) => {
        e = e || window.event;
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

      document.onpointerup = (e) => {
        // odrag.timer = setInterval(() => {
        setInterval(() => {
          desX *= 0.95;
          desY *= 0.95;
          tX += desX * 0.1;
          tY += desY * 0.1;
          applyTranform(odrag);
          playSpin(false);
          if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
            // clearInterval(odrag.timer);
            playSpin(true);
          }
        }, 17);
        document.onpointermove = document.onpointerup = null;
      };
      return false;
    };

    document.onwheel = (e) => {
      e = e || window.event;
      const d = e.deltaY / 20 || -e.detail;
      radius < 250
        ? (radius = 250)
        : radius > 550
        ? (radius = 550)
        : (radius += d);

      // imgWidth < 250
      //   ? (imgWidth = 250)
      //   : imgWidth > 450
      //   ? (imgWidth = 450)
      //   : (imgWidth += d / 2);

      imgWidth += d / 2;

      if (circleSpin) {
        if (imgWidth < 250) imgWidth = 250;
        if (imgWidth > 450) imgWidth = 450;
        circleSpin.style.width = imgWidth + "px";
      }

      init(1);
    };
  }, []);

  return (
    <div className="box_3D">
      <div ref={refDrag} className="box_3D_container container_3D">
        <div ref={refSpin} className="container_3D">
          {films.map((item: Film) => (
            <div key={item.id} className="box_3D_container__item item-carousel">
              <img src={item.imageUrl} alt={item.title || "image carousel"} />
              <p className="name-movie py-1">{item.title}</p>
            </div>
          ))}
          <p className="author">HAM6 BLUE CAROUSELLLLLL</p>
        </div>
        <div id="ground" ref={refGround}></div>
      </div>
    </div>
  );
}
