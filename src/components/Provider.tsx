import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../app/store';
import { ChakraProvider } from '@chakra-ui/react';

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <ChakraProvider>{children}</ChakraProvider>;
    </ReduxProvider>
  );
}
