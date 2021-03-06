import React from 'react';
import styled from 'styled-components';
import RightSection from './RightSection.js';
/* Constants */
import { HEADER_HEIGHT, BP } from '../../../styles/constants';

const Header = ({ backgroundColor, rightSection }) => (
  <Container background={backgroundColor}>
    <figure>
      <img src="/icons/Logo.svg" alt="ON CARE." />
    </figure>

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

  /* Logo section */
  > figure {
    text-align: left;
    margin-bottom: 0;
    /* Logo image */
    > img {
      height: 3rem;
    }
  }
`;

export default Header;
