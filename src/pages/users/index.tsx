import {Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue} from '@chakra-ui/react'
import Link from 'next/link'
import { RiAddLine, RiPencilFill } from 'react-icons/ri'
import Header from '../../components/Header'
import Pagination from '../../components/Pagination'
import Sidebar from '../../components/Sidebar'

export default function UserList() {

    const isWindowWide = useBreakpointValue({base: false, md: true})

  return (
    <Box>
        <Header />

        <Flex w='100%' maxW={1480} mx='auto' px={['4', '6', '8']}>
            <Sidebar />

            <Box flex='1' borderRadius={8} bg='gray.800' p={['4', '6', '8']}>

                <Flex mb='8' justify='space-between' align='center'>
                    <Heading size='lg' fontWeight='normal'>Usuários</Heading>
                    <Link href='/users/create' passHref>
                        <Button
                            as='a' 
                            size='sm'
                            fontSize='sm'
                            colorScheme='pink'
                            leftIcon={<Icon fontSize='md' as={RiAddLine}/>}
                            cursor= 'pointer'
                        >
                            Criar novo
                        </Button>
                    </Link>
                </Flex>

                <Table colorScheme='whiteAlpha'>
                    <Thead>
                        <Tr>
                            <Th px='6' color='gray.300' width='8'>
                                <Checkbox colorScheme='pink' />
                            </Th>
                            <Th>USUÁRIO</Th>
                            {isWindowWide && <Th>DATA DE CADASTRO</Th>}
                            {isWindowWide && <Th width='8'></Th>}
                        </Tr>
                    </Thead>

                    <Tbody>
                        <Tr>
                            <Td px='6'>
                                <Checkbox colorScheme='pink' />
                            </Td>
                            <Td>
                                <Box>
                                    <Text fontWeight='bold'>Gabriel Vitti</Text>
                                    <Text
                                        fontSize='sm'
                                        color='gray.300'>
                                        gabrielvitti22@gmail.com
                                    </Text>
                                </Box>
                            </Td>
                            {isWindowWide && <Td>04 de Abril, 2022</Td>}
                            {
                                isWindowWide && (<Td>
                                    <Button as='a' colorScheme='purple' fontSize='sm' size='sm' leftIcon={<Icon as={RiPencilFill}/>}>
                                        Editar
                                    </Button>
                                </Td>)
                            }
                        </Tr>
                    </Tbody>

                </Table>
            <Pagination />
            </Box>
        </Flex>
    </Box>
  )
}
