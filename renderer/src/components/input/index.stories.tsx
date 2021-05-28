import { Story, Meta } from '@storybook/react'
import { Input, InputProps } from './index'

export default {
	title: 'components/Input',
	component: Input,
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const FormTest = Template.bind({})
FormTest.args = {
	value: '2021-05-01',
	id: 'date',
	type: 'text',
	placeHolder: 'Write down date by YYYY-MM-DD format',
}
