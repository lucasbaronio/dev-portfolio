import { QueryClientProvider } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { initializeReactQueryClient } from './client';

const client = initializeReactQueryClient();

const ReactQueryProvider = ({ children }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

ReactQueryProvider.prototype = {
  childern: PropTypes.node.isRequired,
};

export default ReactQueryProvider;
