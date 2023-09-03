import React from 'react';
import VerticalCarousel from '../components/VerticalCarousel';
// import Image from '../assets/ray-so-export.png';

const Hello = () => {
  return (
    <div className="flex h-full w-full">
      <div className="flex flex-wrap w-full relative">
        <div className=" flex basis-96 items-center justify-center flex-1">
          <div className="flex flex-col my-5">
            <h4 className=" text-lg">Hi all. I am</h4>
            <h1 className=" text-6xl text-white font-thin">Lucas Baronio</h1>
            <h2 className=" text-2xl text-blue-700">$ Fullstack DEVELOPER</h2>
          </div>
        </div>
        <div className="flex basis-96 flex-1 justify-center h-full w-full">
          <VerticalCarousel
            imageData={[
              new URL('/ray-so-export.png', import.meta.url).href,
              new URL('/copy-images.png', import.meta.url).href,
              new URL('/copy-text.png', import.meta.url).href,
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Hello;
