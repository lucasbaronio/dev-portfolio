import { Flowbite } from 'flowbite-react';
import { MainRouter } from './MainRouter';
import { customTheme } from './providers/flowbiteTheme';

function Root() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <MainRouter />
    </Flowbite>
  );
}

export default Root;
