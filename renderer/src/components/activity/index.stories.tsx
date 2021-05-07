
import { Story, Meta } from '@storybook/react'
import { Activity, ActivityProps } from './index'

export default {
	title: 'components/Activity',
	component: Activity,
} as Meta

const Template: Story<ActivityProps> = (args) => <Activity {...args} />

export const ActivityTest = Template.bind({})
ActivityTest.args = {
	beginDate: '2020-05-04',
	endDate: '2021-05-04',
	stacks: [
    { date: '2021-04-25', stack: 90 },
    { date: '2021-04-26', stack: 80 },
    { date: '2021-04-27', stack: 70 },
    { date: '2021-04-28', stack: 60 },
    { date: '2021-05-01', stack: 10 },
    { date: '2021-05-02', stack: 70 },
    { date: '2021-05-03', stack: 40 },
  ],
}
