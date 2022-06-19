import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  height: 3rem;
  width: 4rem;
  
  border-radius: 4px;
  background: #0B9184;
  transition: 250ms;

  color: #fff;
  font-weight: 700;
  font-size: 22px;

  &:first-child {
    margin-right: 1rem;
  }

  &:hover {
    opacity: 0.8;
  }
`;
