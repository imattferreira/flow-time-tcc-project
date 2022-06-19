import styled from 'styled-components';

export const Container = styled.div`
  height : 100%;
  width: 100%;
  z-index: 100;
  position: absolute;
  
  background: rgba(0,0,0, 0.32);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: #fff;
  border-radius: 8px;

  max-height: 55rem;
  padding: 5rem 4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media(max-width: 540px) {
    width: 90%;
  }

  @media(max-width: 480px) {
    width: 90%;
    padding: 3rem 2rem;
  }
`;

export const Header = styled.div`
  background: #0B9184;

  padding: 0.8rem 2rem;
  margin-bottom: 2.8rem;
  border-radius: 4px;

  color: #fff;
  font-weight: 500;
  font-size: 22px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .content-field {
    width: 100%;
    text-align: center;
  }

  @media(min-width: 1080px) {
    height: 4.6rem;
    width: 30rem;
  }

  @media(max-width: 720px) {
    height: 4rem;
    width: 18rem;
  }

  @media(max-width: 600px) {
    height: 4rem;
    width: 20rem;
  }

  @media(max-width: 480px) {
    height: 4rem;
    width: 100%;
  }
`;
