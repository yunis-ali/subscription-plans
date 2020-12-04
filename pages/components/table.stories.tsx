import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { EnhancedTable } from './table.component';

export default {
  title: 'Components / Table',
  component: EnhancedTable,
  argTypes: { },
} as Meta;

const Template: Story = (args) => <EnhancedTable {...args} />;

export const SubscriptionPlans = Template.bind({});
SubscriptionPlans.args = { };