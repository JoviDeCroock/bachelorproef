import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.text};
  height: 96%;
  overflow: hidden;
  padding: 20px;
`;

const InnerWrapper = styled.div`
  background: white;
  margin: 20px;
  padding: 10px 20px;
`;

const Body = ({ children }) => (
  <Wrapper>
    <InnerWrapper>
      {children}
    </InnerWrapper>
  </Wrapper>
);

Body.propTypes = {
  children: PropTypes.node,
};

export default Body;
