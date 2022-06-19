import { Button } from './styles';

interface SubmitButtonProps {
  title: string;
}

function SubmitButton({ title }: SubmitButtonProps) {
  return (
    <Button type="submit">
      { title }
    </Button>
  );
};

export default SubmitButton;
