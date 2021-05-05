import { day } from '../../../../lib/day'

export type GridCell = {
	/**
	 * date: YYYY-MM-DD format
	 */
	date: string
	/**
	 * 0 <= stack <= 100
	 */
	stack: number
}

/**
 * Create celss from beginDate to endDate
 * @param {string} beginDate begin date for grid cells
 * @param {string} endDate end date for grid cells
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
