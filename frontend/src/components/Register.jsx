import { Input, Stack } from '@chakra-ui/react';
import { useState } from 'react';

const initFormData ={
  name:'',
  email:'',
  password:'',
  age:'',
  gender:''
}

const Register =()=>{
       const [formData,setFormData] = useState(initFormData);
       const {name,email,password,age,gender} = formData;
       const handleChange=(e)=>{
             const {name,value} = e.target;
             setFormData({
              ...formData,
              [name]:value
             })
       }

       const handleSubmit =(e)=>{
              e.preventDefault();
              console.log(formData);
       }
      return(
        <Stack>
            <Input onChange={handleChange} name="name" value={name} type="text" placeholder="name"/>
            <Input onChange={handleChange} name="email" value={email} type='email' placeholder='email'  />
            <Input onChange={handleChange} name="password" value={password} type='password' placeholder='password' />
            <Input onChange={handleChange} name="age" value={age} type="number" placeholder="age"/>
            <select onChange={handleChange} name="gender" value={gender} id="">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <Input onClick={handleSubmit} type='submit'/>
        </Stack>
      )
}

export default Register;