import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const RADIUS = 600;
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
      gallery.style.transform = `translateZ(-1500px) rotateY(${-viewAngle}deg) rotateX(${rotateAngle}deg)`;
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
    <div className="container my-4">
      <div
        className="vertical-carousel absolute top-1/2 left-1/2 origin-center cursor-pointer"
        // className="vertical-carousel"
        ref={el}
      >
        {imageData.map((it, index) => (
          <div
            onClick={() => pickImage(it)}
            key={index}
            style={{ backgroundImage: `url(${it})` }}
            className="absolute -top-[150px] -left-[150px] rounded-3xl origin-center w-[700px] h-[500px] bg-black bg-no-repeat bg-center bg-cover transition-all ease-out duration-500"
            // className="vertical-carousel-item"
          ></div>
        ))}
      </div>
      <div
        onClick={() => {
          img.current.style.transform = 'scale(0.0, 0.0)';
        }}
        className="image-display"
        ref={img}
      ></div>
    </div>
  );
};

VerticalCarousel.propTypes = {
  imageData: PropTypes.arrayOf(String),
};

export default VerticalCarousel;
