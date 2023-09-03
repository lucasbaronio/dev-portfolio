import React from 'react';
import VerticalCarousel from '../components/VerticalCarousel';

const Hello = () => {
  return (
    <div className="flex h-full w-full">
      <div className="flex w-full">
        <div className=" flex items-center justify-center flex-1">
          <div className="flex flex-col">
            <h4 className=" text-lg">Hi all. I am</h4>
            <h1 className=" text-6xl text-white font-thin">Lucas Baronio</h1>
            <h2 className=" text-2xl text-blue-700">$ Fullstack DEVELOPER</h2>
          </div>
        </div>
        <div className="flex flex-1 h-full w-full">
          <VerticalCarousel
            imageData={[
              'https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440',
              'https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg',
              'https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669_640.jpg',
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Hello;
