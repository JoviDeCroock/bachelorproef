import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'mobx-formstate';

const TextInput = styled.input`
  border: 0;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
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
    error: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
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
      className, error, placeholder, value = '', type = 'text',
    } = this.props;

    return (
      <Fragment>
        <TextInput
          className={className}
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
