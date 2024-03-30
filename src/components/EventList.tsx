import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { getAllEvents } from '../app/features/eventSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { createCart, getAllCarts } from '../app/features/cartSlice';

type IEvent = {
  id: number;
  name: string;
  description: string;
  date: string;
  image: string;
  price: number;
};

export default function EventList() {
  const { events } = useAppSelector((state) => state.event);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllEvents());
  }, [dispatch]);

  const handleRegister = (event: IEvent) => {
    dispatch(createCart(event));
    dispatch(getAllCarts());
  };

  return (
    <Flex
      height="full"
      width="full"
      direction="column"
      gap="6"
      p="4"
    >
      <Heading
        as="h2"
        size="lg"
      >
        Events
      </Heading>
      <SimpleGrid
        columns={2}
        spacing={4}
      >
        {events.map((event: IEvent) => (
          <Card key={event?.id}>
            <CardHeader>
              <img
                src={event.image}
                alt={event.name}
              />
            </CardHeader>
            <CardBody>
              <Heading
                as="h3"
                size="md"
              >
                {event.name}
              </Heading>
              <p>{event.description}</p>
              <p>{event.date}</p>
            </CardBody>
            <CardFooter>
              <Button
                colorScheme="blue"
                width="full"
                onClick={() => handleRegister(event)}
              >
                Register
              </Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Flex>
  );
}
