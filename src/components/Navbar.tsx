import { Heading } from '@chakra-ui/react';

export default function Navbar() {
  return (
    <nav className="container d-flex p-4 text-bg-primary">
      <Heading
        as="h1"
        size="lg"
      >
        LAST.
      </Heading>
    </nav>
  );
}
