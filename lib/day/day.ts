// date utility
import dayjs from 'dayjs'

const FORMAT_DATE = 'YYYY-MM-DD'

/**
 * Add amount to date
 * @param {string} date date
 * @param {number} amount to be added
 * @param {UnitType} unit like day, month etc
 */
export const add = (date: string, amount: number, unit: dayjs.UnitType): string => {
    return dayjs(date).add(amount, unit).format(FORMAT_DATE)
}
