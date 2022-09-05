import { useState } from 'react';
import Input from "../Input/Input";
import Button from '../Button/Button';

const Form = () => {
  const [ formValue, setFormValue] = useState({
    email: '',
    password: '',


  });

  const handleChange = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <form>
      <Input name='email' placeholder='Email' type='email' value={formValue.email} change={handleChange} />
      <Input name ='password' placeholder='Password' type='password' value={formValue.password} change={handleChange} />
      <Button />
    </form>
  );
}

export default Form;