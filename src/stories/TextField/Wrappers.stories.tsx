import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import  { IconifyTextField , IconifyTextFieldProps} from './wrappers';

export default {
  title: 'BasicComponents/TextField/IconifyTextField',
  component: IconifyTextField,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story<IconifyTextFieldProps> = (args) => (
  <IconifyTextField {...args} />
);

export const BothIconsIconify = Template.bind({});
BothIconsIconify.args = {
  id: 'textfield',
  name: 'textfield',
  type: 'email',
  disabled: false,
  lazyChange: true,
  leadingIcon : "ant-design:amazon-outlined",
  tailingIcon : "ant-design:check-outlined",
  onChange : (value)=>{}
};

export const LeadingIconify = Template.bind({});
LeadingIconify.args = {
  id: 'textfield',
  name: 'textfield',
  type: 'email',
  disabled: false,
  lazyChange: true,
  leadingIcon : "ant-design:amazon-outlined",
  onChange : (value)=>{}
};
export const TailingIconify = Template.bind({});
TailingIconify.args = {
  id: 'textfield',
  name: 'textfield',
  type: 'email',
  disabled: false,
  lazyChange: true,
  tailingIcon : "ant-design:check-outlined",
  onChange : (value)=>{}
};