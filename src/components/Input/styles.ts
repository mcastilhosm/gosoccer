import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #302e35;
  border-radius: 10px;
  border: 2px solid #302e35;
  padding: 12px;
  width: 100%;
  color: #666360;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 12px;
  }

  & + div {
    margin-top: 6px;
  }
`;
