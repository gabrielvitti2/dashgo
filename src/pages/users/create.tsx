import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, Stack, } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import Input from '../../components/Form/Input'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

export default function CreateUser() {
  return (
    <Box>
        <Header />

        <Flex w='100%' maxW={1480} mx='auto' px='6'>
            <Sidebar />

            <Box flex='1' borderRadius={8} bg='gray.800' p={[ '6', '8']}>

                <Heading size='lg' fontWeight='normal'>Criar usuário</Heading>

                <Divider my={['6', '8']} borderColor='gray.700' />

                <Stack spacing={['6', '8']}>
                    <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
                        <Input name='name' label='Nome completo' />
                        <Input name='email' label='E-mail' />
                    </SimpleGrid>

                    <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
                        <Input name='password' label='Senha' type='password' />
                        <Input name='password_confirm' label='Confirme sua senha' type='password' />
                    </SimpleGrid>
                </Stack>

                <Flex mt='8' justifyContent='flex-end' align='center'>

                    <HStack spacing='4'>
                        <Link href='/users' passHref>
                            <Button colorScheme='whiteAlpha'>Cancelar</Button>
                        </Link>
                        <Button colorScheme='pink'>Salvar</Button>
                    </HStack>

                </Flex>


                
            </Box>
        </Flex>
    </Box>
  )
}
