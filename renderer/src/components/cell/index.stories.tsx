import { Story, Meta } from '@storybook/react';
import { Cell, CellProps } from './index'

export default {
  title: 'components/Cell',
  component: Cell,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<CellProps> = (args) => <Cell {...args} />;


//   * 0: タスクなし: #161b22, rgb(22, 27, 34)
export const Lowest = Template.bind({});
Lowest.args = {
    backgroundColorClass: 'bg-gray-900'
};

//   * 1: 0 - 25% | #0e4429, rgb(14, 68, 41)
export const Low = Template.bind({});
Low.args = {
    backgroundColorClass: 'bg-green-900'
};

//   * 2: 25 - 50% | #006d32, rgb(0, 109, 50)
export const Middle = Template.bind({});
Middle.args = {
    backgroundColorClass: 'bg-green-700'
};

//   * 3: 50 - 75% | #26a641, rgb(38, 166, 65)
export const High = Template.bind({});
High.args = {
    backgroundColorClass: 'bg-green-500'
};

//   * 4: 75 - 100% | #39d353, rgb(57, 211, 83)
export const Highest = Template.bind({});
Highest.args = {
    backgroundColorClass: 'bg-green-300'
};
