import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-radius: 8px;

  max-height: 55rem;
  width: 70%;

  margin: 10rem 0 1.5rem 0;
  padding: 5rem 4rem;

  @media(max-width: 540px) {
    width: 90%;
    margin-top: 25rem;
  }

  @media(max-width: 480px) {
    width: 90%;
    margin-top: 10rem;
    padding: 3rem 2rem;
  }

  @media(max-width: 360px) {
    width: 90%;
    margin-top: 15rem;
  }
`;
