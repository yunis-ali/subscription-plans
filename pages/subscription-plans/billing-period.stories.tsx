import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { BillingPeriod } from './billing-period.component';

export default {
  title: 'Subscription Plans / Billing Period',
  component: BillingPeriod,
  argTypes: { },
} as Meta;

const Template: Story = (args) => <BillingPeriod {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = { };