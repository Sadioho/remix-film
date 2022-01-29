// let radius = 240; // how big of the radius
// const autoRotate = true; // auto rotate or not
// const rotateSpeed = -60; // unit: seconds/360 degrees
// const imgWidth = 120; // width of images (unit: px)
// const imgHeight = 170; // height of images (unit: px)
// const init = (delayTime: any) => {
//   for (let i = 0; i < aEle.length; i++) {
//     aEle[i].style.transform =
//       "rotateY(" +
//       i * (360 / aEle.length) +
//       "deg) translateZ(" +
//       radius +
//       "px)";
//     aEle[i].style.transition = "transform 1s";
//     aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
//   }
// };
// setTimeout(init, 1000);

// const odrag = document.getElementById("drag-container");
// const ospin = document.getElementById("spin-container");
// const aImg: any = ospin?.getElementsByTagName("img");
// const aVid: any = ospin?.getElementsByTagName("video");
// const aEle = [...aImg, ...aVid]; // combine 2 arrays

// // Size of images
// if (ospin) {
//   ospin.style.width = imgWidth + "px";
//   ospin.style.height = imgHeight + "px";
// }
// // Size of ground - depend on radius
// const ground = document.getElementById("ground");
// if (ground) {
//   ground.style.width = radius * 3 + "px";
//   ground.style.height = radius * 3 + "px";
// }

// const applyTranform = (obj: any) => {
//   // Constrain the angle of camera (between 0 and 180)
//   if (tY > 180) tY = 180;
//   if (tY < 0) tY = 0;

//   // Apply the angle
//   obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
// };

// const playSpin = (yes: any) => {
//   if (ospin) ospin.style.animationPlayState = yes ? "running" : "paused";
// };

// let desX = 0,
//   desY = 0,
//   tX = 0,
//   tY = 10;

// // auto spin
// if (autoRotate) {
//   const animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
//   if (ospin)
//     ospin.style.animation = `${animationName} ${Math.abs(
//       rotateSpeed
//     )}s infinite linear`;
// }

// // setup events
// document.onpointerdown = (e) => {
//   // clearInterval(odrag.timer);
//   e = e || window.event;
//   let sX = e.clientX,
//     sY = e.clientY;

//   document.onpointermove = function (e) {
//     e = e || window.event;
//     const nX = e.clientX,
//       nY = e.clientY;
//     desX = nX - sX;
//     desY = nY - sY;
//     tX += desX * 0.1;
//     tY += desY * 0.1;
//     applyTranform(odrag);
//     sX = nX;
//     sY = nY;
//   };

//   document.onpointerup = (e) => {
//     // odrag.timer = setInterval(() => {
//     setInterval(() => {
//       desX *= 0.95;
//       desY *= 0.95;
//       tX += desX * 0.1;
//       tY += desY * 0.1;
//       applyTranform(odrag);
//       playSpin(false);
//       if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
//         // clearInterval(odrag.timer);
//         playSpin(true);
//       }
//     }, 17);
//     document.onpointermove = document.onpointerup = null;
//   };
//   return false;
// };

// document.onwheel = (e) => {
//   e = e || window.event;
//   const d = e.deltaY / 20 || -e.detail;
//   radius += d;
//   init(1);
// };
