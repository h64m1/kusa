

import { Story, Meta } from '@storybook/react';
import { Cell, CellProps } from './index'

// export const Primary: React.VFC = () => <Cell backgroundColor={'#000'} />
export default {
  title: 'Example/Cell',
  component: Cell,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<CellProps> = (args) => <Cell {...args} />;

export const Primary = Template.bind({});
Primary.args = {
//   primary: true,
//   label: 'Button',
    backgroundColor: '#00f'
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
