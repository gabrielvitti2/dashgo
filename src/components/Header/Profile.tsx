import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

interface ProfileProps {
  profileData?: boolean
}

export default function Profile({profileData = true}:ProfileProps) {
  return (
    <Flex align='center'>
                {
                  profileData && (
                    <Box textAlign='end' mr='4'>
                      <Text>Gabriel Vitti</Text>
                      <Text color='gray.300' fontSize='small'>
                        gabrielvitti22@gmail.com
                      </Text>
                    </Box>
                  )
                }

                <Avatar name='Gabriel Vitti' size='md' bg='pink.500' src='https://media-exp1.licdn.com/dms/image/D4D35AQGJYXOb0UXqbw/profile-framedphoto-shrink_400_400/0/1654607668285?e=1655427600&v=beta&t=cohQ1zFoWu-0eXPR9926A6_cjc7X27pk3DXs1sWfa-E' />

            </Flex>
  )
}
