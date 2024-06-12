import { Box, Container, Text, VStack, Flex, Spacer, HStack, Link, IconButton } from "@chakra-ui/react";
import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";

const Navbar = () => (
  <Flex as="nav" bg="blue.500" color="white" padding={4}>
    <HStack spacing={4}>
      <IconButton aria-label="Home" icon={<FaHome />} />
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </HStack>
    <Spacer />
    <HStack spacing={4}>
      <IconButton aria-label="Info" icon={<FaInfoCircle />} />
      <IconButton aria-label="Contact" icon={<FaPhone />} />
    </HStack>
  </Flex>
);

const Footer = () => (
  <Box as="footer" bg="blue.500" color="white" padding={4} textAlign="center">
    <Text>&copy; 2023 My Website. All rights reserved.</Text>
  </Box>
);

const Index = () => {
  return (
    <Box>
      <Navbar />
      <Container centerContent maxW="container.md" height="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to My Website</Text>
          <Text>This is the homepage. Use the navigation bar to explore the site.</Text>
        </VStack>
      </Container>
      <Footer />
    </Box>
  );
};

export default Index;