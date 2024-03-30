import { Flex, Heading, SimpleGrid } from '@chakra-ui/react';

export default function EventList() {
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
        columns={3}
        spacing={4}
      ></SimpleGrid>
    </Flex>
  );
}
