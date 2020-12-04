import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { CustomizedSwitch } from './switch.component';

export default {
  title: 'Components / Switch',
  component: CustomizedSwitch,
  argTypes: { },
} as Meta;

const Template: Story = (args) => <CustomizedSwitch {...args} />;

export const BillingPeriod = Template.bind({});
BillingPeriod.args = { };