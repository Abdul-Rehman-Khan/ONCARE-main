import React from 'react';
import styled from 'styled-components';
import { HEADER_HEIGHT, BP } from '../../../styles/constants';
import RightSection from './RightSection.js';

const Header = ({ backgroundColor, rightSection }) => (
  <Container background={backgroundColor}>
    <h1>ON CARE.</h1>
    <RightSection sectionName={rightSection} />
  </Container>
);

const Container = styled.div`
  background: ${(props) => props.background};
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 0 6rem;
  position: fixed;
  width: 100vw;
  height: ${HEADER_HEIGHT};
  z-index: 1;

  @media (max-width: ${BP.TABLET}) {
    padding: 0 3rem;
  }

  @media (max-width: ${BP.MOBILE}) {
    padding: 0 2rem;
  }

  /* Logo Text */
  > div:first-child {
    text-align: left;
  }
`;

export default Header;
