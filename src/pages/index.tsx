import { Flex, Button, Stack } from '@chakra-ui/react'
import Input from '../components/Form/Input'
import { SubmitHandler, useForm } from 'react-hook-form'

interface inputSubmitData {
  email: string,
  password: string
}


export default function SignIn () {

  const {register, handleSubmit} = useForm<inputSubmitData>()

  const onSingIn: SubmitHandler<inputSubmitData> = (data) => {
    console.log(data)

  }

  return (
    <Flex
      h='100vh'
      w='100vw'
      align='center'
      justify='center'>

      <Flex
        flexDir='column'
        as='form'
        w='100%'
        maxW={360}
        bg='gray.800'
        p={8}
        borderRadius={8}
        onSubmit={handleSubmit(onSingIn)}
      >

        <Stack spacing={4}>

          <Input name='email' label='E-mail' type='email' {...register('email'), {isRequired: true}}/>

          <Input name='password' label='Senha' type='password' {...register('password'), {isRequired: true}} />
           
        </Stack>

        <Button type='submit' mt={6} colorScheme='pink' size='lg'> Entrar </Button>

      </Flex>


    </Flex>
  )
}
