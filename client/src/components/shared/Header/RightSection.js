import React from 'react';
import SignUpLink from './SignUpLink';
import SignOutLink from './SignOutLink';
import styled from 'styled-components';

const RightSection = ({ sectionName }) => {
  const renderSection = (sectionName) => {
    switch (sectionName) {
      case 'signUp':
        return !window.location.pathname.includes('signup') && <SignUpLink />;
      case 'signOut':
        return <SignOutLink />;
      default:
        return null;
    }
  };

  return <Container>{renderSection(sectionName)}</Container>;
};

const Container = styled.div`
  text-align: right;
`;

export default RightSection;
