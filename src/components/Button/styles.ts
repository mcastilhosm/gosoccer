import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #0090ff;
  height: 46px;
  border-radius: 10px;
  border: 0;
  padding: 0 12px;
  color: #f4ede8;
  width: 100%;
  font-weight: 500;
  margin-top: 12px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#0090ff')};
  }
`;
