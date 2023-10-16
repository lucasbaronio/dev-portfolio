import { QueryClient } from '@tanstack/react-query';

export const initializeReactQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
};
