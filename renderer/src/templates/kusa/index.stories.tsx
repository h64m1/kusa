
import { Meta, Story } from '@storybook/react'
import { Kusa, KusaContainer, KusaContainerProps, KusaProps } from './index'
import { GridPresenter } from '../grid'

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
	changeDate: (date: string) => {
		console.debug('changeDate', date)
	},
	date: '2021-06-01',
	onChangeActivities: (activities: number) => {
		console.debug('onChangeActivities', activities)
	}
}

export const KusaContainerTest = TemplateContainer.bind({})
KusaContainerTest.args = {
	beginDate: '2020-06-01',
	endDate: '2021-06-01',
	stacks: [],
	onChangeStacks: (stack: GridPresenter.GridCell) => {
		console.debug('onChangeStacks', stack)
	}
}
