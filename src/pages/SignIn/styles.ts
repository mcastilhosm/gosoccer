import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/background-sign-in.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;

  img {
    height: 150px;
    width: 150px;
  }

  form {
    margin: 20px 0px 0px 0px;
    width: 300px;
    text-align: center;

    h1 {
      margin-bottom: 12px;
    }

    a {
      color: #444340;
      display: block;
      margin-top: 12px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#444340')};
      }
    }
  }

  > a {
    color: #0090ff;
    display: block;
    text-decoration: none;
    transition: color 0.2s;
    font-weight: 500;
    margin-top: 20px;

    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
    }

    &:hover {
      color: ${shade(0.2, '#0090ff')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
