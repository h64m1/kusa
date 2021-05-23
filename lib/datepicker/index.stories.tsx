import { Story, Meta } from '@storybook/react'
import { DatePicker, DatePickerProps } from './index'

export default {
	title: 'lib/DatePicker',
	component: DatePicker
} as Meta

const Template: Story<DatePickerProps> = (args) => <DatePicker {...args} />

export const DatePickerTest = Template.bind({})
DatePickerTest.args = {
    value: '2021-05-01',
	selected: new Date(),
}
