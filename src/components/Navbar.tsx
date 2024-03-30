import { Heading } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="container d-flex p-4">
      <Heading
        as="h1"
        size="lg"
      >
        LAST.
      </Heading>
    </nav>
  );
}
