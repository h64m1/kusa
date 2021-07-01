import { day } from '../lib/day'
import { GridCell } from '../src/templates/grid/presenter'

/**
 * Generate stacks mock data from beginDate to endDate
 * @param {string} beginDate begin date
 * @param {string} endDate end date
 */
export const stacks = (beginDate: string, endDate: string): GridCell[] => {
	// const stacks = [
	// 	{
	// 		date: '2021-06-01',
	// 		activities: 3,
	// 	},
	// 	{
	// 		date: '2021-06-02',
	// 		activities: 8,
	// 	},
	// 	{
	// 		date: '2021-06-03',
	// 		activities: 2,
	// 	},
	// 	...
	// ]

	const n = day.diff(endDate, beginDate)
	const stacks: GridCell[] = []
	for (let i = 0; i < n; i++) {
		const cell = {
			date: day.add(beginDate, i, 'day'),
			stack: Math.floor(Math.random() * 100),
		}
		stacks.push(cell)
	}

	return stacks
}
