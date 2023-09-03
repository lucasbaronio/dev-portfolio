import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const RADIUS = 400;
const ITEM_SHIFT = 100;

const VerticalCarousel = ({ imageData }) => {
  const el = useRef(null);
  const animId = useRef(0);
  const img = useRef(null);

  let angleUnit, rotateAngle, viewAngle, mouseX, mouseY;

  useEffect(() => {
    // Reset parameters
    angleUnit = 360 / imageData.length;
    mouseX = mouseY = 0;
    rotateAngle = 0;
    viewAngle = 0;

    const items = el.current.children;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const itemAngle = angleUnit * i;
      const itemAngleRad = (itemAngle * Math.PI) / 180;
      const ypos = Math.sin(itemAngleRad) * RADIUS;
      const zpos = Math.cos(itemAngleRad) * RADIUS;
      const ypos1 = Math.sin(itemAngleRad) * (RADIUS + ITEM_SHIFT);
      const zpos1 = Math.cos(itemAngleRad) * (RADIUS + ITEM_SHIFT);
      item.style.transform = `translateY(${ypos}px) translateZ(${zpos}px) rotateX(${-itemAngle}deg)`;
      item.onmouseover = () => {
        item.style.transform = `translateY(${ypos1}px) translateZ(${zpos1}px) rotateX(${-itemAngle}deg)`;
      };
      item.onmouseout = () => {
        item.style.transform = `translateY(${ypos}px) translateZ(${zpos}px) rotateX(${-itemAngle}deg)`;
      };
    }

    const gallery = el.current;

    // Rotate and animate the gallery
    cancelAnimationFrame(animId.current);
    const updateFrame = () => {
      rotateAngle += mouseY;
      viewAngle += (mouseX - viewAngle) * 0.05;
      // console.log('mouseX', mouseX);
      // console.log('mouseY', mouseY);
      // console.log('rotateAngle', rotateAngle);
      // console.log('viewAngle', viewAngle);
      gallery.style.transform = `translateZ(-1500px) rotateY(${-viewAngle}deg) rotateX(${rotateAngle}deg)`;
      // gallery.style.transform = `translateZ(-1500px) rotateY(${-viewAngle}deg) rotateX(210deg)`;
      animId.current = requestAnimationFrame(updateFrame);
    };
    updateFrame();
  }, [imageData]);

  const mouseMoveHandler = (e) => {
    mouseX = (e.clientX / innerWidth - 0.5) * 10;
    mouseY = (e.clientY / innerHeight - 0.5) * 1.25;
  };
  // Detect mouse movement
  document.body.onmousemove = mouseMoveHandler;

  // Display the image
  const pickImage = (imgUrl) => {
    img.current.style.backgroundImage = `url(${imgUrl})`;
    img.current.style.transform = 'scale(1, 1)';
  };

  return (
    <>
      <div className="relative overflow-hidden mx-auto my-4 w-full h-[800px] perspective">
        <div
          className="vertical-carousel absolute top-1/2 left-4 origin-center cursor-pointer"
          // className="vertical-carousel"
          ref={el}
        >
          {imageData.map((url, index) => (
            <div
              onClick={() => pickImage(url)}
              key={index}
              style={{ backgroundImage: `url(${url})` }}
              className={`absolute -top-[150px] -left-[150px] rounded-3xl origin-center w-[60vw] aspect-video bg-black bg-no-repeat bg-center bg-cover transition-all ease-out duration-500`}
            ></div>
          ))}
        </div>
      </div>
      <div
        onClick={() => {
          img.current.style.transform = 'scale(0.0, 0.0)';
        }}
        className="absolute cursor-pointer w-[800px] h-[400px] top-[62%] left-[62%] -mt-[300px] -ml-[500px] rounded bg-no-repeat bg-center bg-cover transition-all ease-out duration-500 scale-0 bg-black"
        ref={img}
      ></div>
    </>
  );
};

VerticalCarousel.propTypes = {
  imageData: PropTypes.arrayOf(String),
};

export default VerticalCarousel;
