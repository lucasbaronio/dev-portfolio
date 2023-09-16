import React from 'react';
import VerticalCarousel from '../components/VerticalCarousel';

const Hello = () => {
  return (
    <div className="flex h-full w-full">
      <div className="flex flex-wrap w-full relative">
        <div className=" flex basis-96 items-center justify-center flex-1">
          <div className="flex flex-col my-5">
            <h4 className=" text-lg">Hi all. I am</h4>
            <h1 className=" animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-6xl font-thin my-2">
              Lucas Baronio
            </h1>
            <pre className=" flex text-2xl text-blue-300">
              ${' '}
              <h2 className=" animate-typing overflow-hidden border-r-2 border-r-orange-500 whitespace-nowrap pr-1">
                Software Engineer Fullstack
              </h2>
            </pre>
          </div>
        </div>
        <div className="flex basis-96 flex-1 justify-center h-full w-full">
          <VerticalCarousel
            imageData={[
              new URL('/paste-text.png', import.meta.url).href,
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
