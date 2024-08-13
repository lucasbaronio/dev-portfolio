import { Flowbite } from 'flowbite-react';
import { customTheme } from './providers/flowbiteTheme';
import ReactQueryProvider from './providers/reactQuery/ReactQueryProvider';

function Root({ children }) {
  return (
    <ReactQueryProvider>
      <Flowbite theme={{ theme: customTheme }}>{children}</Flowbite>
    </ReactQueryProvider>
  );
}

export default Root;
