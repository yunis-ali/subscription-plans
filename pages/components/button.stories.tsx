import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { ContainedButton, ContainedButtonProps } from './button.component';

export default {
  title: 'Components / Button',
  component: ContainedButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ContainedButtonProps> = (args) => <ContainedButton {...args} />;

export const GetStartedEnabled = Template.bind({});
GetStartedEnabled.args = {
  primary: true,
  label: 'Get Started',
};

export const GetStartedDisabled = Template.bind({});
GetStartedDisabled.args = {
  primary: false,
  label: 'Get Started',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Get Started',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Get Started',
};
