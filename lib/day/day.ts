// date utility
import dayjs from 'dayjs'

const FORMAT_DATE = 'YYYY-MM-DD'

/**
 * month index (0 start)
 * @param {string} date date
 * @returns month index
 */
export const month = (date: string): number => {
    return dayjs(date).get('month')
}

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

/**
 * true if date1 === date2
 * @param {string} date1 date1
 * @param {string} date2 date2
 * @return true or false
 */
export const isSame = (date1: string, date2: string): boolean => {
    return dayjs(date1).isSame(date2)
}

/**
 * Start of unit of date
 * @param {string} date date
 * @param {OpUnitType} unit like day, month etc
 * @return date
 */
export const startOf = (date: string, unit: dayjs.OpUnitType): string => {
    return dayjs(date).startOf(unit).format(FORMAT_DATE)
}

/**
 * End of unit of date
 * @param {string} date date
 * @param {OpUnitType} unit like day, month etc
 * @return date
 */
export const endOf = (date: string, unit: dayjs.OpUnitType): string => {
    return dayjs(date).endOf(unit).format(FORMAT_DATE)
}
