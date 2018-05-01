import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'redux-form';

const StyledTextInput = styled.input`
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

class TextInput extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    input: PropTypes.shape({
      onChange: PropTypes.func,
      value: PropTypes.string,
    }),
    placeholder: PropTypes.string,
    type: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { input: { onChange } } = this.props;
    e.preventDefault();
    e.stopPropagation();
    onChange(e.target.value);
  }

  render() {
    const {
      className, disabled, error, placeholder, input: { value = '' }, type = 'text',
    } = this.props;

    return (
      <Fragment>
        <StyledTextInput
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

const TextField = ({ fieldId, name, ...props }) => (
  <Field component={TextInput} name={name} fieldId={fieldId} {...props} />
);

TextField.propTypes = {
  fieldId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TextField;
