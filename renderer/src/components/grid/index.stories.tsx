import { Story, Meta } from '@storybook/react';
import { Grid, GridProps } from './index'

export default {
  title: 'components/Grid',
  component: Grid,
} as Meta;

const Template: Story<GridProps> = (args) => <Grid {...args} />;


export const GridTest = Template.bind({});
GridTest.args = {
    stacks: [0, 10, 20, 50, 70, 90, 0, 100, 0, 50, 70, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
};
