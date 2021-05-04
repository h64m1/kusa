import { day } from '../'

test('test day library', () => {
    // Add
    // Long unit type
    expect(day.add('2021-04-05', 1, 'day')).toBe('2021-04-06')
    expect(day.add('2021-04-05', 1, 'month')).toBe('2021-05-05')
    expect(day.add('2021-04-05', 1, 'year')).toBe('2022-04-05')

    // Short unit type
    expect(day.add('2021-05-02', 1, 'd')).toBe('2021-05-03')
    expect(day.add('2021-05-02', 1, 'M')).toBe('2021-06-02')
    expect(day.add('2021-05-02', 1, 'y')).toBe('2022-05-02')

    // Difference
    expect(day.diff('2021-04-01', '2020-04-01')).toBe(365)
    expect(day.diff('2021-05-01', '2021-05-01')).toBe(0)
})