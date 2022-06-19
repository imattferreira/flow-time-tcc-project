import { ButtonHTMLAttributes } from 'react';

import { BtnContainer } from './styles';

interface InputCheckboxProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isActive: boolean;
}

function InputCheckbox({ title, isActive, ...props }: InputCheckboxProps) {

  return (
    <>
      {
        isActive ?
          <BtnContainer type="button" className="active" {...props}>
            {title}
            <input type="radio" id="checkbox-input" value={title} />
          </BtnContainer>

          :
          
          <BtnContainer type="button" {...props}>
            {title}
            <input type="radio" id="checkbox-input" />
          </BtnContainer>
      }
    </>
  )
};

export default InputCheckbox;
