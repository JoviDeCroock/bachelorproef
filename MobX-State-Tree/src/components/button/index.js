import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.lightAccent};
  border: 1px solid ${({ theme }) => theme.pageBackground};
  color: ${({ theme }) => theme.darkShades};
  cursor: pointer;
  padding: 3px 6px;
  text-align: center;
`;

export default class Button extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    const { onClick } = this.props;
    e.preventDefault();
    e.stopPropagation();
    onClick();
  }

  render() {
    const { className, label, onClick } = this.props;
    return (
      <StyledButton className={className} onClick={onClick}>
        {label}
      </StyledButton>
    );
  }
}
