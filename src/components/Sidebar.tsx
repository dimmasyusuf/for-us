import { Flex, Heading } from '@chakra-ui/react';

export default function Sidebar() {
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
    </Flex>
  );
}
