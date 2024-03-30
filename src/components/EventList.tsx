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

type IEvent = {
  id: string;
  name: string;
  description: string;
  date: string;
  image: string;
};

export default function EventList() {
  const { events } = useAppSelector((state) => state.event);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllEvents());
  }, [dispatch]);

  console.log('events:', events);

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
