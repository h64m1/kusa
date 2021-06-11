import { Story, Meta } from '@storybook/react';
import { SelectYear, SelectYearContainer, SelectYearProps } from './index'

export default {
  title: 'components/SelectYear',
  component: SelectYear,
} as Meta;

const Template: Story<SelectYearProps> = (args) => <SelectYear {...args} />;
const TemplateContainer: Story = () => <SelectYearContainer />;

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
    selectedYear: 0,
};

export const SelectYearContainerTest = TemplateContainer.bind({});
