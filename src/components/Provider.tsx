import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../app/store';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <ChakraProvider>{children}</ChakraProvider>;
      </BrowserRouter>
    </ReduxProvider>
  );
}
