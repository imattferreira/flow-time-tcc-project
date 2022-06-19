import { ReactNode } from 'react';

import { Container } from './styles';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

interface HeaderProps {
  children?: ReactNode;
}

function Header({ children }: HeaderProps) {
  return (
    <Container>
      <Link to="/dashboard">
        <img src={logo} alt="flow-time" />
      </Link>
      { children }
    </Container>
  );
};

export default Header;
