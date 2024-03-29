import { Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './app/store';
import { decrement, increment } from './app/features/counterSlice';

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center gap-4">
      <Button
        colorScheme="blue"
        onClick={() => dispatch(increment())}
      >
        +
      </Button>
      <span>{count}</span>
      <Button
        colorScheme="red"
        onClick={() => dispatch(decrement())}
      >
        -
      </Button>
    </div>
  );
}

export default App;
