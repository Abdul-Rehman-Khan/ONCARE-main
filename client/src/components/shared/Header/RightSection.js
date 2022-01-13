import React from 'react';
import SignUpLink from './SignUpLink';
import styled from 'styled-components';

const RightSection = ({ sectionName }) => {
  const renderSection = (sectionName) => {
    switch (sectionName) {
      case 'signUp':
        return !window.location.pathname.includes('signup') && <SignUpLink />;

      case 'signOut':
        // Todo
        // return <SignOutLink />;
        return null;
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
