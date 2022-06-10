import React from 'react'

import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'

import Logo from './Logo'
import SearchBox from './SearchBox'
import Notification from './Notification'
import Profile from './Profile'
import { useDrawerSidebar } from '../../hooks/useDrawerSidebar'
import { RiMenLine, RiMenuLine } from 'react-icons/ri'

export default function Header() {

  const isWindowWide = useBreakpointValue({base: false, md: true})

  const {onOpen} = useDrawerSidebar()

  return (
    <Flex
      as='header'
      w='100%'
      maxW={1480}
      h='20'
      mx='auto'
      mt='4'
      align='center'
      px='6'
    >

        {
          !isWindowWide && <IconButton alignItems='center' fontSize='24' mr='2' p='0' display='flex' variant='unstyled' aria-label='Icone Menu' icon={<Icon as={RiMenuLine} />} onClick={onOpen}/>
        }     

        <Logo />

        {isWindowWide && <SearchBox />}

        <Flex align='center' ml='auto'>

          <Notification />
              
          <Profile profileData={isWindowWide && true}/>

        </Flex>

    </Flex>
  )
}
