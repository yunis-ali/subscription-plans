import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Index, IndexProps } from './index.component';
import * as HeaderStories from './header.stories';

export default {
  title: 'Subscription Plans / Index',
  component: Index,
} as Meta;

const Template: Story<IndexProps> = (args) => <Index {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {
  ...HeaderStories.DefaultState.args,
};

/* export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
}; */