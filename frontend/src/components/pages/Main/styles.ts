import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 5rem 0 0 0;

  header.fields-header {
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

    .content-field:first-child {
      width: 14rem;
    }
  }

  .user-content {
    background: #DFF3F1;
    transition: 250ms;
    border-radius: 4px;

    margin: 1rem 0;
    padding: 0.8rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: #0B9184;
    font-weight: 500;
    font-size: 20px;

    .user-name {
      width: 14rem;
    }

    &:hover {
      background: #39BFB2;
      opacity: 0.8;
      color: #fff;
    }
  }

  @media(max-width: 720px) {
      .content-field:not(:first-child),
      .user-field:not(:first-child) {
        display: none;
      }

      .user-name:first-child {
        width: 100%;
      }

      .content-field:first-child,
      .user-name{
        text-align: center;
      }
    }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #0B9184;
  border-radius: 4px;
  transition: 250ms;

  height: 3rem;
  width: 3rem;

  &:hover {
    opacity: 0.8;
  }

  @media(max-width: 480px) {
    height: 2.5rem;
    width: 2.5rem;
  }
`;

