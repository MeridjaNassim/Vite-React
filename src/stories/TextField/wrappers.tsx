import React from 'react';
import TextField, { TextFieldProps } from '.';
import { Icon, IconifyIcon } from '@iconify/react';

export interface IconifyTextFieldProps extends TextFieldProps {
  leadingIcon?: string | IconifyIcon,
  tailingIcon?: string | IconifyIcon
}

export const IconifyTextField: React.FC<IconifyTextFieldProps> = ({
  leadingIcon,
  tailingIcon,
  ...props
}) => {
  return (
    <TextField
      {...props}
      leadingIcon={
        leadingIcon && 
        <Icon icon={leadingIcon} />
      }
      tailingIcon={
        tailingIcon && 
        <Icon
          icon={tailingIcon} />
      }
    ></TextField>
  );
};
