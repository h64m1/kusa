import { Story, Meta } from '@storybook/react';
import { SelectYear, SelectYearProps } from './index'

export default {
  title: 'components/SelectYear',
  component: SelectYear,
} as Meta;

const Template: Story<SelectYearProps> = (args) => <SelectYear {...args} />;

export const SelectYearTest = Template.bind({});
SelectYearTest.args = {
    years: [
        '2017',
        '2018',
        '2019',
        '2020',
        '2021',
        'now',
    ],
    selected: 5,
};
