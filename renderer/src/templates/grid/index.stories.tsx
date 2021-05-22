import { Story, Meta } from '@storybook/react'
import { Grid, GridProps } from './index'
import { GridContainer, GridContainerProps } from './index'

export default {
	title: 'templates/Grid',
	component: Grid,
} as Meta

const Template: Story<GridProps> = (args) => <Grid {...args} />
const TemplateContainer: Story<GridContainerProps> = (args) => (
	<GridContainer {...args} />
)

export const GridTest = Template.bind({})
GridTest.args = {
	dates: [
		'2021-05-01',
		'2021-05-02',
		'2021-05-03',
		'2021-05-04',
		'2021-05-05',
		'2021-05-06',
		'2021-05-07',
		'2021-05-08',
		'2021-05-09',
		'2021-05-10',
		'2021-05-11',
		'2021-05-12',
		'2021-05-13',
		'2021-05-14',
	],
	stacks: [0, 10, 20, 50, 70, 90, 0, 100, 0, 0, 25, 75, 50, 10],
	stacksNormalized: [0, 10, 20, 50, 70, 90, 0, 100, 0, 0, 25, 75, 50, 10],
}

export const GridContainerTest = TemplateContainer.bind({})
GridContainerTest.args = {
	beginDate: '2020-05-04',
	endDate: '2021-05-04',
	stacks: [
		{ date: '2021-04-25', stack: 60 },
		{ date: '2021-04-26', stack: 8 },
		{ date: '2021-04-27', stack: 56 },
		{ date: '2021-04-28', stack: 6 },
		{ date: '2021-05-01', stack: 10 },
		{ date: '2021-05-02', stack: 18 },
		{ date: '2021-05-03', stack: 40 },
		{ date: '2021-05-04', stack: 2 },
		{ date: '2021-05-05', stack: 4 },
	],
}
