import { Flowbite } from 'flowbite-react';
import { MainRouter } from './MainRouter';
import { customTheme } from './providers/flowbiteTheme';
import ReactQueryProvider from './providers/reactQuery/ReactQueryProvider';

function Root() {
  return (
    <ReactQueryProvider>
      <Flowbite theme={{ theme: customTheme }}>
        <MainRouter />
      </Flowbite>
    </ReactQueryProvider>
  );
}

export default Root;
