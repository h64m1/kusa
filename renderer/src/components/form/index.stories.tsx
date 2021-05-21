import { Story, Meta } from '@storybook/react'
import { Form, FormProps } from './index'

export default {
	title: 'components/Form',
	component: Form
} as Meta

const Template: Story<FormProps> = (args) => <Form {...args} />

export const FormTest = Template.bind({})
FormTest.args = {
	label: 'Date',
	value: '2021-05-01',
	inputId: 'date',
	inputType: 'date',
	inputPlaceHolder: 'Date',
}
