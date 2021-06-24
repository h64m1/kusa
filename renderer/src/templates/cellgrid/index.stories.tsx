import { Meta, Story } from '@storybook/react';
import { CellGrid, CellGridContainer, CellGridContainerProps, CellGridProps } from './index';

export default {
  title: 'templates/CellGrid',
  component: CellGrid,
} as Meta;

const Template: Story<CellGridProps> = (args) => <CellGrid {...args} />;
const TemplateContainer: Story<CellGridContainerProps> = (args) => <CellGridContainer {...args} />;

export const CellGridTest = Template.bind({});
CellGridTest.args = {
	date: '2021-06-23',
	stack: 50,
	stackNormalized: 50,
}

export const CellGridContainerTest = TemplateContainer.bind({});
CellGridContainerTest.args = {
	date: '2021-06-23',
	stack: 50,
	stackNormalized: 50,
}
