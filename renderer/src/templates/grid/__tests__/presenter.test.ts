import * as Presenter from '../presenter'

test('grid presenter: create date cells', () => {
	// if beginDate == endDate = 2021-05-01
	// start: 2021-04-25, end: 2021-05-01
	const dates1 = Presenter.gridCells('2021-05-01', '2021-05-01')
	expect(dates1.length).toBe(7)
	expect(dates1[0]).toBe('2021-04-25')
	expect(dates1[6]).toBe('2021-05-01')

	// if beginDate > endDate
	// empty array
	const dates2 = Presenter.gridCells('2021-04-30', '2021-04-28')
	expect(dates2.length).toBe(0)
})

test('grid presenter: find stacks from dates array', () => {
	const dates = Presenter.gridCells('2021-05-01', '2021-05-03')
	const cells = [
		{ date: '2021-05-01', stack: 10 , stackNormalized: 10 },
		{ date: '2021-05-02', stack: 70 , stackNormalized: 70 },
		{ date: '2021-05-03', stack: 40 , stackNormalized: 40 },
	]
	// From 2021-04-25 to 2021-05-08
	const stacks = Presenter.findStackCells(dates, cells)
	expect(stacks.length).toBe(14)
	expect(stacks[0]).toBe(0) // 2021-04-25
	expect(stacks[6]).toBe(10) // 2021-05-03
	expect(stacks[7]).toBe(70) // 2021-05-03
	expect(stacks[8]).toBe(40) // 2021-05-03
})

test('grid presenter: normalize stack', () => {
	// normalization
	const stacks = [0, 236, 560, 1200, 110] // sum = 2106
	const norm = Presenter.normalize(stacks)
	expect(norm.length).toBe(5)
	expect(norm[0]).toBe(0) // 0
	expect(norm[1]).toBe(20) // 236/1200 = 0.1966 ~ 20
	expect(norm[2]).toBe(47) // 560/1200 = 0.4666 ~ 47
	expect(norm[3]).toBe(100) // 1200/1200 = 100
	expect(norm[4]).toBe(9) // 110/1200 = 0.0916 ~ 9
})
