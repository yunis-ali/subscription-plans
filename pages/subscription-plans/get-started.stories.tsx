import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { GetStarted, GetStartedProps } from './get-started.component';

export default {
  title: 'Subscription Plans / Get Started',
  component: GetStarted,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<GetStartedProps> = (args) => <GetStarted {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {
  primary: "false",
  size: 'large',
  label: 'Get Started',
};

export const Enabled = Template.bind({});
Enabled.args = {
  primary: "true",
  size: 'large',
  label: 'Get Started',
};