import { ButtonHTMLAttributes } from 'react';
import { Button } from './styles';

interface AnchorButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

function AnchorButton({ title, ...props }: AnchorButtonProps) {
  return (
    <Button { ...props }>
      { title }
    </Button>
  );
};

export default AnchorButton;
