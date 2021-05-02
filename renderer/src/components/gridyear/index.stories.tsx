
import { Story, Meta } from '@storybook/react';
import { GridYear, GridYearProps } from './index';

export default {
  title: 'components/GridYear',
  component: GridYear
} as Meta;

const Template: Story<GridYearProps> = (args) => <GridYear {...args} />;


export const GridTest = Template.bind({});
GridTest.args = {
    stacks: [0, 10, 20, 50, 70, 90, 0, 100, 0, 50, 70, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
};
