import React from 'react';
import {Controller} from 'react-hook-form';
import {InputContainer, IconContainer, InputText, ErrorText} from './styles';

const Input = ({leftIcon, name, control, errorMessage, ...rest}) => {
  return (
    <>
      <IconContainer>
        <InputContainer>
          {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
          <Controller
            name={name}
            control={control}
            rules={{required: true}}
            render={({field}) => <InputText {...field} {...rest} />}
          />
        </InputContainer>
      </IconContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
};

export {Input};