import { Box, Button, Flex, HStack } from '@chakra-ui/react'
import React from 'react'

export default function Pagination() {
  return (
    <Flex justify='space-between' align='center' mt='8'>
        <Box>
            <strong>0</strong> - <strong>5</strong> de <strong>50</strong>
        </Box>

        <HStack spacing='2'>
            <Button
                size='sm'
                fontSize='xs'
                colorScheme='pink'
                w='4'
                disabled
                _disabled={{
                    bg: 'pink.500',
                    cursor: 'default'
                }}

            >
                1
            </Button>
            <Button
                size='sm'
                fontSize='xs'
                bg='gray.700'
                w='4'
                _hover={{
                    bg:'gray.500'
                }}

            >
                2
            </Button>
            <Button
                size='sm'
                fontSize='xs'
                bg='gray.700'
                w='4'
                _hover={{
                    bg:'gray.500'
                }}

            >
                3
            </Button>
            <Button
                size='sm'
                fontSize='xs'
                bg='gray.700'
                w='4'
                _hover={{
                    bg:'gray.500'
                }}

            >
                4
            </Button>
            
        </HStack>
    </Flex>
  )
}
