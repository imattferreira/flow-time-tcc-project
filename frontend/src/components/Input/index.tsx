import { InputHTMLAttributes } from 'react';

import { Container, InputCustom } from './styles';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  
}

function Input({ placeholder, ...props }: InputProps) {
  return (
    <Container { ...props }>
      <p>{ placeholder }</p>
      <InputCustom { ...props } />
    </Container>
  );
};

export default Input;
