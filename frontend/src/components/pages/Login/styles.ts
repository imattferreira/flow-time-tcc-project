import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  form.create-user-form {
    div.btn-wrapper {
      @media(min-width: 720px) {
        padding-left: 1rem;
      }
    }
  }
`;

export const Container = styled.div`
  height: 100vh;
  width: 45%;
  position: relative;

  background: #fff;
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media(max-width: 600px) {
    & {
      position: absolute;
      width: 100%;
      padding: 0rem;
    }
  }
`;

export const Content = styled.div`
  h1 {
    color: #0B9184;
    font-size: 3rem;
    max-width: 18rem;
    text-align: start;

    @media(max-width: 600px) {
      font-size: 2.6rem;
    }

    @media(max-width: 320px) {
      font-size: 2.2rem;
      margin-left: 1rem;
      max-width: 14rem;
    }
  }

  form.login {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const LogoContent = styled.div`
  width: 65%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 1rem 2rem;

  img {
    margin-bottom: 2rem;
  }

  p {
    color: #0A8A7D;
    font-size: 40px;
    text-align: center;
  }
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;