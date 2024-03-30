import { Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getAllCarts } from '../app/features/cartSlice';
import { useEffect } from 'react';

type ICart = {
  id: number;
  name: string;
  price: number;
};

export default function Sidebar() {
  const { carts } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCarts());
  }, [dispatch]);

  return (
    <Flex
      height="full"
      minWidth="400px"
      direction="column"
      gap="4"
      p="4"
    >
      <Heading
        as="h2"
        size="lg"
      >
        Cart
      </Heading>

      <SimpleGrid
        columns={1}
        gap={4}
      >
        {carts.map((cart: ICart) => (
          <Flex
            key={cart.id}
            direction="column"
            p="4"
            border="1px"
            borderColor="gray.200"
            borderRadius="md"
          >
            <Heading
              as="h3"
              size="md"
            >
              {cart.name}
            </Heading>
            <Heading
              as="h4"
              size="sm"
            >
              {cart.price}
            </Heading>
          </Flex>
        ))}
      </SimpleGrid>
    </Flex>
  );
}
