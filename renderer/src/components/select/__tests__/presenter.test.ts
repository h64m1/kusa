import { act, renderHook } from '@testing-library/react-hooks'
import { day } from '../../../../lib/day'
import * as Presenter from '../presenter'

test('select presenter: years', () => {
	const years = Presenter.years()
	const thisYear = `${day.year(day.today())}`

	expect(years.length).toBe(6)
	for (let i = 0; i < 5; i++) {
		const year = Number(thisYear) - 4 + i
		expect(years[i]).toBe(`${year}`)
	}
	expect(years[5]).toBe('now')
})

test('select presenter: change year', () => {
	const { result } = renderHook(() => Presenter.useSelectYear(0))

    // initial value
    expect(result.current.year).toStrictEqual(0)

    // Change year index
    act(() => {
        result.current.changeYear(1)
    })
    expect(result.current.year).toStrictEqual(1)
})
