
import { Story, Meta } from '@storybook/react'
import { Label, LabelProps } from './index'

export default {
	title: 'components/Label',
	component: Label,
} as Meta

const Template: Story<LabelProps> = (args) => <Label {...args} />

export const LabelTest = Template.bind({})
LabelTest.args = {
    label: 'ラベル'
}
