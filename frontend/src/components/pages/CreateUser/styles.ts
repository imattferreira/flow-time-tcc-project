import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .fields-header {
    width: 100%;
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
  }

  form {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  form .input {
    width: 100%;

    margin-left: 0;
    margin-right: 0;
  }

  form .input:first-child {
    margin-top: 0;
  }

  .input-container {
    display: flex;
    flex-direction: row;

    width: 100%;

    & > button:first-child {
      margin-right: 1rem;
    }
  }

  @media(max-width: 720px) {
    .input-container {
    display: flex;
    flex-direction: column;

    width: 100%;

    & > button:first-child {
      margin-bottom: 0.5rem;
    }
  }
  }
`;
