import { Box, Flex, Text, Button, Image, SimpleGrid, useColorModeValue, VStack, HStack, IconButton } from '@chakra-ui/react';
import { FaShoppingCart, FaPlus, FaMinus, FaTrash } from 'react-icons/fa';

const products = [
  { id: 1, name: "T-Shirt", price: 20, image: "/images/tshirt.jpg" },
  { id: 2, name: "Jeans", price: 40, image: "/images/jeans.jpg" },
  { id: 3, name: "Sweater", price: 30, image: "/images/sweater.jpg" },
  { id: 4, name: "Jacket", price: 50, image: "/images/jacket.jpg" }
];

const Index = () => {
  const bg = useColorModeValue("gray.100", "gray.700");

  return (
    <Box p={5}>
      <Flex justifyContent="space-between" mb={10}>
        <Text fontSize="2xl" fontWeight="bold">Clothing Store</Text>
        <IconButton icon={<FaShoppingCart />} isRound="true" />
      </Flex>
      <SimpleGrid columns={2} spacing={10}>
        {products.map(product => (
          <Box key={product.id} bg={bg} p={5} rounded="md" shadow="md">
            <Image src={product.image} alt={product.name} borderRadius="lg" />
            <VStack mt={2}>
              <Text fontWeight="bold" fontSize="xl">{product.name}</Text>
              <Text fontSize="lg">${product.price}</Text>
              <HStack>
                <IconButton icon={<FaMinus />} isRound="true" />
                <Text>1</Text>
                <IconButton icon={<FaPlus />} isRound="true" />
                <IconButton icon={<FaTrash />} isRound="true" />
              </HStack>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;