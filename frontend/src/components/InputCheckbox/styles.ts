import styled from 'styled-components';

export const BtnContainer = styled.button`
  border-radius: 4px;
  border: 3px solid #DFF3F1;
  transition: 250ms;

  height: 4.6rem;
  width: 100%;

  background: #DFF3F1;

  color: #0B9184;
  font-size: 1.4rem;
  font-weight: 700;

  &:hover {
    opacity: 0.7;
  }

  &.active {
    background: #39BFB2;
    border: 3px solid #39BFB2;
    color: #fff;
  }

  input {
    display: none;
  }
`;
