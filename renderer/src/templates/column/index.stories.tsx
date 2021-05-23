import { Meta, Story } from '@storybook/react'
import { Column, ColumnProps } from './index'

// export const Primary: React.VFC = () => <Cell backgroundColor={'#000'} />
export default {
	title: 'templates/Column',
	component: Column,
} as Meta

const Template: Story<ColumnProps> = (args) => <Column {...args} />

// test
export const ColumnTest = Template.bind({})
ColumnTest.args = {
	dates: [
		'2021-05-01',
		'2021-05-02',
		'2021-05-03',
		'2021-05-04',
		'2021-05-05',
		'2021-05-06',
		'2021-05-07',
	],
	stacks: [0, 20, 40, 60, 80, 0, 80],
	stacksNormalized: [0, 20, 40, 60, 80, 0, 80],
}
