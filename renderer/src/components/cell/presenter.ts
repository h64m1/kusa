// 0: タスクなし
// 1: 0 - 25%
// 2: 25 - 50%
// 3: 50 - 75%
// 4: 75 - 100%
type CellLevel = 'Lowest' | 'Low' | 'Middle' | 'High' | 'Highest'

/**
 * Convert stack (0-100) into cell level string
 * @param {number} stack 0-100
 * @returns cell level
 */
const cellLevelFrom = (stack: number): CellLevel => {
	if (stack <= 0 || stack > 100) {
		return 'Lowest'
	} else if (stack <= 25) {
		return 'Low'
	} else if (stack <= 50) {
		return 'Middle'
	} else if (stack <= 75) {
		return 'High'
	} else {
		return 'Highest'
	}
}

type BackgroundColor =
	| 'bg-green-300'
	| 'bg-green-500'
	| 'bg-green-700'
	| 'bg-green-900'
	| 'bg-gray-900'

/**
 * Convert stack (0-100) into background color classname
 * @param {bigint} stack 0-100
 * @returns background color classname
 */
export const backgroundColor = (stack: number): BackgroundColor => {
	const cellLevel = cellLevelFrom(stack)

	switch (cellLevel) {
		case 'Lowest':
			return 'bg-gray-900'
		case 'Low':
			return 'bg-green-900'
		case 'Middle':
			return 'bg-green-700'
		case 'High':
			return 'bg-green-500'
		case 'Highest':
			return 'bg-green-300'
	}
}
