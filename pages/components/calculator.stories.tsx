import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Calculator, CalculatorProps } from './calculator.component';

export default {
  title: 'Components / Calculator',
  component: Calculator,
} as Meta;

const Template: Story<CalculatorProps> = (args) => <Calculator {...args} />;

export const Total = Template.bind({});