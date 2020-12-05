import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Header, HeaderProps } from './header.component';

export default {
  title: 'Subscription Plans / Header',
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {
  title: "Subscription Plans"
};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  title: "Subscription Plans",
  user: {},
};