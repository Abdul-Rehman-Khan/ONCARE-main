import React from 'react';
import styled from 'styled-components';
import { COLOR, BP } from '../../../styles/constants';
import { Link } from 'react-router-dom';

const SignUpLink = ({ className }) => {
  return (
    <Container className={className}>
      Don&apos;t have an account?{' '}
      <span>
        <Link to="/signup">SIGN UP</Link>
      </span>
    </Container>
  );
};

const Container = styled.p`
  color: ${COLOR.GREY_TEXT_DARK};
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: ${BP.MOBILE}) {
    display: none;
  }

  /* 'Sign up' link */
  > span {
    margin-left: 1rem;
    font-weight: 600;
    font-size: 1.4rem;
  }
`;

export default SignUpLink;
