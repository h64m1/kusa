import * as Presenter from '../presenter'

test('activity presenter: month names', () => {
    // ['Jan', 'Feb']
    expect(Presenter.months('2021-01-31', '2021-02-07')).toEqual(['Jan', 'Feb'])
    // ['Mar', '', 'Apr']
    expect(Presenter.months('2021-03-22', '2021-04-07')).toEqual(['Mar', '', 'Apr'])
    // ['Sep', '', '', 'Oct']
    expect(Presenter.months('2021-09-16', '2021-10-09')).toEqual(['Sep', '', '', 'Oct'])
    // []
    expect(Presenter.months('2021-04-01', '2021-02-01')).toEqual([])
})