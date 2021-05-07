import { Story, Meta } from '@storybook/react';
import { Week } from './index'

export default {
  title: 'components/Week',
  component: Week,
//   argTypes: {
//   },
} as Meta;

const Template: Story = (args) => <Week {...args} />;

export const WeekTest = Template.bind({});
WeekTest.args = {
};
