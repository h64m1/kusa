import { Story, Meta } from '@storybook/react';
import { Column, ColumnProps } from './index'

// export const Primary: React.VFC = () => <Cell backgroundColor={'#000'} />
export default {
  title: 'components/Column',
  component: Column,
} as Meta;

const Template: Story<ColumnProps> = (args) => <Column {...args} />;


// test
export const ColumnTest = Template.bind({});
ColumnTest.args = {
    stacks: [0, 20, 40, 60, 80, 0, 80]
};
