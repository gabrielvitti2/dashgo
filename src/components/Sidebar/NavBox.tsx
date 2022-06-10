import { Box, Stack, Text } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface NavBoxProps {
    name: string,
    children: ReactNode
}

export default function NavBox({children, name}:NavBoxProps) {
  return (
      <Box>
          <Text fontWeight='bold' color='gray.400' fontSize='small'>{name}</Text>
          <Stack spacing='4' mt='8' align='stretch'>
              {children}
          </Stack>
      </Box>
  )
}
