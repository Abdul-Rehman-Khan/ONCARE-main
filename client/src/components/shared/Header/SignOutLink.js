import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../../AuthContext';
/* Constants */
import { COLOR } from '../../../styles/constants';

const SignOutLink = () => {
  const { logout } = useContext(AuthContext);

  return <LinkButton onClick={() => logout()}>Log out</LinkButton>;
};

const LinkButton = styled.div`
  background-color: unset;
  letter-spacing: 1px;
  display: inline;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    color: ${COLOR.GREY_TEXT_DARK};
  }

  &:focus {
    outline: 0;
  }
`;

export default SignOutLink;
