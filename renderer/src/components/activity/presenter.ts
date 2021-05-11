import { day } from '../../../../lib/day'
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
 * Create months (Jan, Feb, ...)
 * @param {string} beginDate begin date for grid cells
 * @param {string} endDate end date for grid cells
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
