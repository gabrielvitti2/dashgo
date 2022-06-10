import {Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue, useDisclosure} from '@chakra-ui/react'
import { useDrawerSidebar } from '../../hooks/useDrawerSidebar'
import SidebarNav from './SidebarNav'

export default function Sidebar() {

  const isWindowWide = useBreakpointValue({base: false, md: true}) 
  const {onClose, isOpen} = useDrawerSidebar()

  if(!isWindowWide){


    return (
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent bg='gray.800'>
          <DrawerCloseButton />

          <DrawerHeader>
            Navegação
          </DrawerHeader>

          <DrawerBody overflow='hidden'>
            <SidebarNav />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <SidebarNav />
  )
}
