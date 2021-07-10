import { day } from '../../../lib/day'

export type GridCell = {
	/**
	 * date: YYYY-MM-DD format
	 */
	date: string
	/**
	 * original stack value
	 */
	stack: number
}

/**
 * Create celss from beginDate to endDate
 * @param {string} beginDate begin date for grid cells
 * @param {string} endDate end date for grid cells
 * @returns array of dates
 */
export const gridCells = (beginDate: string, endDate: string): string[] => {
	const cells: string[] = []

	// return if beginDate > endDate
	if (day.diff(endDate, beginDate) < 0) {
		return cells
	}

	// - first cell: start of date (Sunday) in a week where beginDate belongs to
	// - last cell: last date (Saturday) in a week where endDate belongs to
	const start = day.startOf(beginDate, 'week')
	const end = day.endOf(endDate, 'week')

	const numberOfDate = day.diff(end, start)
	for (let i = 0; i < numberOfDate + 1; i++) {
		const date = day.add(start, i, 'day')
		cells.push(date)
	}

	return cells
}

/**
 * Find dates for stack > 0 from stacks array
 * @param {string[]} dates Array of dates
 * @param {GridCell[]} stacks Array of grid cells
 * @return Array of stacks
 */
export const findStackCells = (
	dates: string[],
	stacks: GridCell[],
): number[] => {
	return dates.map((date) => {
		// Find the same date from props.stacks, return stack
		const cell = stacks.find((e) => day.isSame(e.date, date))
		if (cell === undefined) {
			return 0
		}

		return cell.stack
	})
}

/**
 * Normalize stack value to [0, 100]
 * @param {number[]} stacks Array of stacks
 * @returns Array of normalized stacks
 */
export const normalize = (stacks: number[]): number[] => {
	// maximum
	const max = Math.max(...stacks)
	// return original stacks if max = 0
	if (max === 0) {
		return stacks
	}

	// calculate average
	return stacks.map((e) => Math.round((e * 100) / max))
}

/**
 * Hide cells if date > today
 * @param {string[]} dates array of dates
 * @returns Array of hide flag
 */
export const hide = (dates: string[]): boolean[] => {
	const today = day.today()
	return dates.map((e) => {
		return day.diff(today, e) < 0
	})
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
