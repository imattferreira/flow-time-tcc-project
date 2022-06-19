import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 5rem;

  background: #fff;
  border-radius: 0 0 4px 4px;
  padding: 0.8rem 1rem;

  position: absolute;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    max-height: 4rem;

    img {
      height: 4rem;
    }
  }

  @media(max-width: 480px) {
    max-height: 4rem;
    
    a {
      max-height: 3rem;

      img {
      height: 3rem;
    }
    }
  }
`;
