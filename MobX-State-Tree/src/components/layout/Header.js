import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderWrapper = styled.div`
  align-content: center;
  align-items: center;
  background: ${({ theme }) => theme.darkShades};
  display: flex;
  justify-content: flex-start;
  height: 4%;
  vertical-align: center;
`;

const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.text};
  height: 100%;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  &.active {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.darkShades};
    font-weight: bold;
  }
  &:hover {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.darkShades};
  }
`;

const Header = ({ links }) => (
  <HeaderWrapper>
    {links.map(({ value, label }) => (
      <StyledLink key={value} href={value} to={value}>
        {label}
      </StyledLink>
    ))}
  </HeaderWrapper>
);

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })),
  // logo: PropTypes.string,
};

export default Header;
