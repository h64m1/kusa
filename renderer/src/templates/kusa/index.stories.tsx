
import { Meta, Story } from '@storybook/react'
import { Kusa, KusaContainer, KusaContainerProps, KusaProps } from './index'

export default {
	title: 'templates/Kusa',
	component: Kusa,
} as Meta

const Template: Story<KusaProps> = (args) => <Kusa {...args} />
const TemplateContainer: Story<KusaContainerProps> = (args) => <KusaContainer {...args} />

export const KusaTest = Template.bind({})
KusaTest.args = {
	beginDate: '2020-06-01',
	endDate: '2021-06-01',
	stacks: [],
	date: '2021-06-01'
}

export const KusaContainerTest = TemplateContainer.bind({})
KusaContainerTest.args = {
}
