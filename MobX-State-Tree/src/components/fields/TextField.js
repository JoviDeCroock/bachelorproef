import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'mobx-formstate';

const TextInput = styled.input`
  border: 0;
  border-bottom: 1px solid black;
  background: ${({ disabled }) => (disabled ? '#959998' : 'transparent')};
  margin-bottom: 10px;
  width: auto;
  :focus {
    outline: none;
  }
`;

const ErrorText = styled.p`
  color: ${({ theme }) => theme.danger};
  margin-bottom: 0;
  margin-top: 0;
`;

class TextField extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.any, // eslint-disable-line
  }

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { onChange } = this.props;
    e.preventDefault();
    e.stopPropagation();
    onChange(e.target.value);
  }

  render() {
    const {
      className, disabled, error, placeholder, value = '', type = 'text',
    } = this.props;

    return (
      <Fragment>
        <TextInput
          className={className}
          disabled={disabled}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={this.onChange} />
        <ErrorText>{error}</ErrorText>
      </Fragment>

    );
  }
}

export default props => <Field Component={TextField} {...props} />;
