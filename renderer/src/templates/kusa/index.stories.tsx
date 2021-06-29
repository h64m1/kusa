
import { Story, Meta } from '@storybook/react'
import { Kusa, KusaProps } from './index'

export default {
	title: 'templates/Kusa',
	component: Kusa,
} as Meta

const Template: Story<KusaProps> = (args) => <Kusa {...args} />

export const KusaTest = Template.bind({})
KusaTest.args = {
	beginDate: '2020-06-01',
	endDate: '2021-06-01',
	stacks: [],
}
