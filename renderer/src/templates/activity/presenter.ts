import { day } from '../../../lib/day'
import { gridCells } from '../grid/presenter'

const monthNames = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
]

/**
 * Remove one of adjacent month name
 * @param {string[]} months array of month name
 * @returns array of trim months
 */
export const trim = (months: string[]): string[] => {
    // trim start if length > 2
    if (months.length <= 2) {
        return months
    }

    // first 2 elements
    const first = months.slice(0, 2)
    if (first[0] !== '' && first[1] !== '') {
        // if first adjacent two elements are not empty, make 1st element empty
        months[0] = ''
    }

    // last 2 elements
    const last = months.slice(-2, months.length)
    if (last[0] !== '' && last[1] !== '') {
        // if last adjacent two elements are not empty, make last element empty
        months[-1] = ''
    }

    return months
}

/**
 * Create months (Jan, Feb, ...)
 * @param {string} beginDate begin date for grid cells
 * @param {string} endDate end date for grid cells
 * @returns array of months
 */
export const months = (beginDate: string, endDate: string): string[] => {
	const dates = gridCells(beginDate, endDate)

	const months: string[] = []
	const length = dates.length
	let currentMonth = -1
	for (let i = 0; i < length; i++) {
		const date = dates[i]
		if (i % 7 === 0) {
			const month = getMonthName(date, currentMonth)
			months.push(month.name)
			currentMonth = month.monthId
		}
	}

	return months
}

type MonthName = {
	/**
	 * Month name
	 */
	name: string
	/**
	 * Month index
	 */
	monthId: number
}

/**
 * Pair of (month name, month index)
 * @param {string} date date
 * @param {number} currentMonth current month index
 * @returns pair of (month name, month index)
 */
const getMonthName = (date: string, currentMonth: number): MonthName => {
	const month = day.month(date)
	if (month !== currentMonth) {
		// new month is found
		return {
			name: monthNames[month],
			monthId: month,
		}
	} else {
		// same month, do not change name/month
		return {
			name: '',
			monthId: currentMonth,
		}
	}
}
