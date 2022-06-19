import { ReactNode } from 'react';

import { Container } from './styles';

interface ContentProps {
  children?: ReactNode;
}

function Content({ children }: ContentProps) {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default Content;
