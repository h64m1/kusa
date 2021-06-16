import React from 'react'
import { day } from '../../../lib/day'

const YEAR_FROM = 5

type UseSelectYearType = {
	year: number
	changeYear: (index: number) => void
}

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

export const useSelectYear = (initialValue: number): UseSelectYearType => {
	const [year, setYear] = React.useState(initialValue)

	const changeYear = (index: number) => {
		setYear(index)
	}

	return { year, changeYear }
}
