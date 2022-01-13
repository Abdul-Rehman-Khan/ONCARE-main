import React from 'react';
import styled from 'styled-components';
import Header from '../components/shared/Header';
import { BP, HEADER_HEIGHT, COLOR } from '../styles/constants';

function AppNavigation(props) {
  return (
    <>
      <Header
        backgroundColor="transparent"
        logoColor="light"
        rightSection="signOut"
      />
      <Container>
        <ContentWrapper>
          <h1>Members</h1>
          {props?.children}
        </ContentWrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  min-height: 100vh;
  background: ${COLOR.GREY_PAGE_BACKGROUND};
  padding: calc(${HEADER_HEIGHT} + 5rem) 6rem 4rem;

  @media (max-width: ${BP.TABLET}) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media (max-width: ${BP.MOBILE}) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;
const ContentWrapper = styled.div`
  max-width: 139rem;
  margin: 0 auto;
`;

export default AppNavigation;
