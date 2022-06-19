import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 4.6rem;
  width: 22rem;
  
  margin: 1rem 0;

  background: #0A8A7D;
  transition: 250ms;
  border-radius: 4px;

  color: #fff;
  font-size: 1.8rem;
  font-weight: 700;

  &:hover {
    opacity: 0.7;
  }

  @media(min-width: 1080px) {
    height: 4.6rem;
    width: 30rem;
    padding: 0.6rem 0.6rem;
  }

  @media(max-width: 720px) {
    height: 4rem;
    width: 100%;
    font-size: 1.6rem;
  }

  @media(max-width: 600px) {
    height: 4rem;
    font-size: 1.2rem;
    padding: 0.2rem;
  }

  @media(max-width: 480px) {
    height: 4rem;
    width: 100%;
    font-size: 1.2rem;
    padding: 0.2rem;
  }

  @media(max-width: 320px) {
    height: 3rem;
    width: 100%;
  }
`;
