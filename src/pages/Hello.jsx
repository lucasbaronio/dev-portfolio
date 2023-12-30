import React from 'react';
import { useTranslation } from 'react-i18next';
// import VerticalCarousel from '../components/VerticalCarousel';

const Hello = () => {
  const { t } = useTranslation();

  return (
    <div className="flex h-full w-full">
      <div className="flex flex-wrap w-full relative">
        <div className=" flex basis-96 items-center justify-center flex-1 px-4">
          <div className="flex flex-col my-5">
            <h4 className=" text-lg">{t('hello.subtitle')}</h4>
            <h1 className=" animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-6xl font-thin my-2">
              {t('myName')}
            </h1>
            <pre className=" flex text-lg sm:text-2xl text-primary-300">
              ${' '}
              <h2 className=" animate-typing overflow-hidden border-r-2 border-r-orange-500 pr-1">
                {t('hello.career')}
              </h2>
            </pre>
          </div>
        </div>
        <div className=" flex basis-96 flex-1 items-center justify-center h-full w-full px-4">
          <iframe
            className="w-[700px] md:w-[400px] lg:w-[700px] h-full lg:h-[700px]"
            src="https://snake-game-three-mu.vercel.app/"
          />
          {/* <VerticalCarousel
            imageData={[
              new URL('/paste-text.png', import.meta.url).href,
              new URL('/copy-images.png', import.meta.url).href,
              new URL('/copy-text.png', import.meta.url).href,
            ]}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Hello;
