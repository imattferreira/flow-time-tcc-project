import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin: 0.5rem 0;
  border-radius: 4px;
  border: 3px solid #DFF3F1;
  transition: 250ms;

  height: 4.6rem;
  width: 22rem;
  padding: 0.6rem 0.6rem;

  background: #DFF3F1;

  p {
    font-size: 1.2rem;
    color: #39BFB2;

    @media(max-width: 600px) {
      font-size: 1rem;
    }
  }

  &:focus-within {
    border: 3px solid #39BFB2;
  }

  @media(min-width: 1080px) {
    height: 4.6rem;
    width: 30rem;
    margin: .5rem 1rem;
  }

  @media(max-width: 720px) {
    height: 4rem;
    width: 18rem;
    font-size: 1.6rem;
  }

  @media(max-width: 600px) {
    height: 4rem;
    width: 20rem;
    font-size: 1.2rem;
    padding: 0.2rem;
  }

  @media(max-width: 480px) {
    height: 4rem;
    width: 100%;
  }
`;

export const InputCustom = styled.input`
  background: #DFF3F1;
  font-size: 22px;
  padding: 0.4rem;
  width: 100%;
  height: 60%;
  color: #0B9184;

  @media(max-width: 600px) {
    height: 60%;
  }

  @media(max-width: 320px) {
    height: 50%;
  } 
`;
