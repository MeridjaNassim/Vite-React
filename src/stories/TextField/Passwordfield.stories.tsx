import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import PasswordField, { PasswordTextFieldProps } from './PasswordTextField';

export default {
  title: 'BasicComponents/TextField/PasswordField',
  component: PasswordField,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story<PasswordTextFieldProps> = (args) => (
  <PasswordField {...args} />
);

export const SimplePasswordField = Template.bind({});
SimplePasswordField.args = {
  id: 'textfield',
  name: 'textfield',
  type: 'password',
  disabled: false,
  lazyChange: true,
  onChange: (value: string) => {},
};
