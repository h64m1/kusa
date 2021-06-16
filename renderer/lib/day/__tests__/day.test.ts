import { day } from '../'

const getDate = (): string => {
    const today = new Date()
    const y = today.getFullYear()
    const m = ('00' + (today.getMonth()+1)).slice(-2);
    const d = ('00' + today.getDate()).slice(-2);
    return `${y}-${m}-${d}`
}

test('test day library', () => {
    // Today
    expect(day.today()).toBe(getDate())

    // year
    expect(day.year('2021-06-01')).toBe(2021)

    // month
    expect(day.month('2021-01-01')).toBe(0)
    expect(day.month('2021-11-01')).toBe(10)

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

    // isSame
    expect(day.isSame('2021-05-01', '2021-05-01')).toBe(true)
    expect(day.isSame('2021-05-01', '2021-06-01')).toBe(false)

    // startOf/endOf
    expect(day.startOf('2021-05-04', 'week')).toBe('2021-05-02')
    expect(day.startOf('2021-05-04', 'month')).toBe('2021-05-01')
    expect(day.endOf('2021-05-04', 'week')).toBe('2021-05-08')
    expect(day.endOf('2021-05-04', 'month')).toBe('2021-05-31')
})