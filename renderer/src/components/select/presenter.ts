import { day } from '../../../../lib/day'

const YEAR_FROM = 5

/**
 * Array of years since 5 years ago
 * @returns array of years (YYYY)
 */
export const years = (): string[] => {
	const thisYear = `${day.year(day.today())}`
	const years = []
	for (let i = 0; i < YEAR_FROM; i++) {
		years.push(`${day.year(day.add(thisYear, -YEAR_FROM + i + 1, 'year'))}`)
	}
	years.push('now')
	return years
}
