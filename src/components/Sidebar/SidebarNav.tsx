import { Box, Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import NavBox from "./NavBox";
import NavLink from "./NavLink";

export default function SidebarNav() {



  return (
    <Box as='aside' w='64' mr='8'>

        <Stack spacing='12' align='flex-start'>

            <NavBox name='GERAL'>
                <NavLink href='/dashboard' icon={RiDashboardLine}>Dashboard</NavLink>
                <NavLink href='/users' icon={RiContactsLine}>Usuários</NavLink>
            </NavBox>
            
            <NavBox name='AUTOMAÇÃO'>
                <NavLink href='/forms' icon={RiInputMethodLine}>Formulários</NavLink>
                <NavLink href='/automation' icon={RiGitMergeLine}>Automação</NavLink>
            </NavBox>

        </Stack>
    </Box>
  )
}
