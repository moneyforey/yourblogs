import { Input, Stack } from '@chakra-ui/react'
const Register =()=>{
      return(
        <Stack>
            <Input type='email' placeholder='email'  />
            <Input type='password' placeholder='password' />
            <Input type="text" placeholder="name"/>
            <Input type="number" placeholder="age"/>
            <Input type='text' placeholder="gender"/>
            <Input type='submit'/>
        </Stack>
      )
}

export default Register;