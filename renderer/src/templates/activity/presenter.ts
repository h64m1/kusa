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
		months[months.length - 1] = ''
	}

	return months
}
