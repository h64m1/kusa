// date utility
import * as dayjs from 'dayjs'

const FORMAT_DATE = 'YYYY-MM-DD'

/**
 * 指定されたUnitに対する日付の加算処理
 * @param {string} date 日付
 * @param {number} amount 日付に加算する量
 * @param {UnitType} unit dayやmonthなどのユニット指定
 */
export const add = (date: string, amount: number, unit: dayjs.UnitType): string => {
    return dayjs(date).add(amount, unit).format(FORMAT_DATE)
}
