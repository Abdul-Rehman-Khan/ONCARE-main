import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import { BP, HEADER_HEIGHT } from '../../styles/constants';

const CoverWrapperLayout = ({ children }) => (
  <>
    <Header
      backgroundColor="transparent"
      logoColor="light"
      rightSection="signUp"
    />
    <Container>
      <ContentWrapper>{children}</ContentWrapper>
    </Container>
  </>
);

const Container = styled.div`
  display: grid;
  height: 100vh;

  @media (max-width: ${BP.TABLET}) {
    display: block;
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (max-width: ${BP.MOBILE}) {
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
    padding: calc(${HEADER_HEIGHT} + 2rem) 2rem 2rem;
  }
`;

export default CoverWrapperLayout;
