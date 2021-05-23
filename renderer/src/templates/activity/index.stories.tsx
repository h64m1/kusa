
import { Meta, Story } from '@storybook/react'
import { Activity, ActivityContainer, ActivityContainerProps, ActivityProps } from './index'

export default {
	title: 'templates/Activity',
	component: Activity,
} as Meta

const Template: Story<ActivityProps> = (args) => <Activity {...args} />
const ContainerTemplate: Story<ActivityContainerProps> = (args) => <ActivityContainer {...args} />

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
  months: [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
    '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50',
    '51', '52', '53',
  ]
}

export const ActivityContainerTest = ContainerTemplate.bind({})
ActivityContainerTest.args = {
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