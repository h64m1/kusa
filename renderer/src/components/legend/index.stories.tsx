import { Story, Meta } from '@storybook/react'
import { LegendContainer } from './index'

export default {
	title: 'components/Legend',
	component: LegendContainer,
} as Meta

const Template: Story = () => <LegendContainer />

export const LegendTest = Template.bind({})
