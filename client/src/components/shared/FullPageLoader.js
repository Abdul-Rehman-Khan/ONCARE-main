import React from 'react';
import styled from 'styled-components';
/* Shared Components and utils */
import Loader from './Loader';

const PageLoader = () => {
  return (
    <Wrapper>
      <Loader />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default PageLoader;
