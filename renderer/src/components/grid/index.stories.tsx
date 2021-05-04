import { Story, Meta } from '@storybook/react'
import { Grid, GridProps } from './index'
import { GridContainer, GridContainerProps } from './index'

export default {
	title: 'components/Grid',
	component: Grid,
} as Meta

const Template: Story<GridProps> = (args) => <Grid {...args} />
const TemplateContainer: Story<GridContainerProps> = (args) => (
	<GridContainer {...args} />
)

export const GridTest = Template.bind({})
GridTest.args = {
	stacks: [
		0,
		10,
		20,
		50,
		70,
		90,
		0,
		100,
		0,
		50,
		70,
		80,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
	],
}

export const GridContainerTest = TemplateContainer.bind({})
GridContainerTest.args = {
	beginDate: '2020-05-04',
	endDate: '2021-05-04',
	stacks: [
    { date: '2021-04-25', stack: 90 },
    { date: '2021-04-26', stack: 80 },
    { date: '2021-04-27', stack: 70 },
    { date: '2021-04-28', stack: 60 },
    { date: '2021-05-01', stack: 10 },
    { date: '2021-05-02', stack: 70 },
    { date: '2021-05-03', stack: 40 },
  ],
}
