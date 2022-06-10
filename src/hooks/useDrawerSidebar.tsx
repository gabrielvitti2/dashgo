import { useDisclosure, UseDisclosureReturn} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";
 
type DrawerSidebarContextData = UseDisclosureReturn

const DrawerSidebarContext = createContext({} as DrawerSidebarContextData)

interface DrawerSidebarProps {
    children: ReactNode
}

export function DrawerSidebar ({children}:DrawerSidebarProps) {

    const Disclosure = useDisclosure()


    const router = useRouter()

    useEffect(() => {
        Disclosure.onClose()
    }, [router.asPath])

    return(
        
        <DrawerSidebarContext.Provider value={Disclosure}>
            {children}
        </DrawerSidebarContext.Provider>
    )
}

export const useDrawerSidebar = () => useContext(DrawerSidebarContext)