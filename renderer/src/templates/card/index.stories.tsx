
import { Story, Meta } from '@storybook/react'
import { Card, CardProps } from './index'

export default {
	title: 'templates/Card',
	component: Card,
} as Meta

const Template: Story<CardProps> = (args) => <Card {...args} />

export const CardTest = Template.bind({})
CardTest.args = {
	date: '2021-05-15',
	activities: [
		'テスト0',
		'テスト1',
		'テスト2',
		'テスト3',
	]
}
