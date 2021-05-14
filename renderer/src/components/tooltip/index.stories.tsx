import { Story, Meta } from '@storybook/react'
import { Tooltip, TooltipProps } from './index'

export default {
	title: 'components/Tooltip',
	component: Tooltip,
} as Meta

const Template: Story<TooltipProps> = (args) => <Tooltip {...args} />

export const TooltipTest = Template.bind({})
TooltipTest.args = {
	tooltipMessage: 'hello world',
	contents: 'this is test',
}
