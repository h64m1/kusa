import { Story, Meta } from '@storybook/react';
import { CellGrid, CellGridProps } from './index'

export default {
  title: 'templates/CellGrid',
  component: CellGrid,
} as Meta;

const Template: Story<CellGridProps> = (args) => <CellGrid {...args} />;
// const TemplateContainer: Story<CellContainerProps> = (args) => <CellContainer {...args} />;

export const CellGridTest = Template.bind({});
CellGridTest.args = {
	date: '2021-06-23',
	stack: 50,
	stackNormalized: 50,
}
