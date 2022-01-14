import React from 'react';
import styled from 'styled-components';
import SignUpLink from './SignUpLink';
import SignOutLink from './SignOutLink';

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
