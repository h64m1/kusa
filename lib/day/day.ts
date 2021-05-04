// date utility
import dayjs from 'dayjs'

const FORMAT_DATE = 'YYYY-MM-DD'

/**
 * Add amount to date
 * @param {string} date date
 * @param {number} amount to be added
 * @param {UnitType} unit like day, month etc
 * @return date
 */
export const add = (date: string, amount: number, unit: dayjs.UnitType): string => {
    return dayjs(date).add(amount, unit).format(FORMAT_DATE)
}

/**
 * Difference between lhs and rhs, return number of date
 * @param {string} lhs subtrahend
 * @param {string} rhs minuend
 * @return number of date
 */
export const diff = (lhs: string, rhs: string): number => {
    return dayjs(lhs).diff(rhs, 'day')
}