import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SimpleSelect } from './select.component';

export default {
  title: 'Components / Selector',
  component: SimpleSelect,
  argTypes: { },
} as Meta;

const Template: Story = (args) => <SimpleSelect {...args} />;

export const Currency = Template.bind({});
Currency.args = { };