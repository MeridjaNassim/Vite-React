import React, { useState } from 'react';
import TextField, { TextFieldProps } from '.';
import { Icon } from '@iconify/react';
export interface PasswordTextFieldProps extends TextFieldProps {
  onToggleVisibility?: (isVisible: boolean) => void;
}

const PasswordTextField: React.FC<PasswordTextFieldProps> = ({
  onToggleVisibility,
  ...props
}) => {
  const [type, setType] = useState<'password' | 'text'>('password');
  const handleVis = () => {
    setType(type == 'password' ? 'text' : 'password');
    onToggleVisibility && onToggleVisibility(type == 'text');
  };
  return (
    <TextField
      {...props}
      leadingIcon={<Icon icon="ant-design:lock-outlined" />}
      tailingIcon={
        <Icon
          onClick={handleVis}
          icon={
            type == 'password'
              ? 'ant-design:eye-filled'
              : 'ant-design:eye-invisible-filled'
          }
        />
      }
      type={type}
    ></TextField>
  );
};

export default PasswordTextField;
