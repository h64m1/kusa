import { Story, Meta } from '@storybook/react'
import { Card, CardContainer, CardContainerProps, CardProps } from './index'

export default {
	title: 'templates/Card',
	component: Card,
} as Meta

const Template: Story<CardProps> = (args) => <Card {...args} />
const TemplateContainer: Story<CardContainerProps> = (args) => <CardContainer {...args} />

export const CardTest = Template.bind({})
CardTest.args = {
	date: '2021-05-15',
	hook: {
		activities: [''],
		pushActivity: () => {
			console.debug('pushActivity')
		},
		removeActivity: (index: number) => {
			console.debug('removeActivity')
		},
		changeActivity: (index: number, value: string) => {
			console.debug('changeActivity')
		},
	},
}

export const CardContainerTest = TemplateContainer.bind({})
CardContainerTest.args = {
	date: '2021-05-15',
}
