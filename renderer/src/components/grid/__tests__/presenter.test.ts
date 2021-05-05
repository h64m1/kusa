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
