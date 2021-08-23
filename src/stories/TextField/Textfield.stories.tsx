import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import TextField, { TextFieldProps } from './index';

export default {
  title: 'BasicComponents/TextField',
  component: TextField,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const SimpleTextField = Template.bind({});
SimpleTextField.args = {
  id: 'textfield',
  name: 'textfield',
  type: 'text',
  placeholder: 'Your name',
  disabled: false,
  lazyChange: true,
  onChange: (value) => {
    console.log(value);
  },
};
export const NotLazyTextField = Template.bind({});
NotLazyTextField.args = {
  id: 'textfield',
  name: 'textfield',
  type: 'text',
  placeholder: 'Your name',
  disabled: false,
  lazyChange: false,
  onChange: (value: string) => {},
};
