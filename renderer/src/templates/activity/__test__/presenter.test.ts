import * as Presenter from '../presenter'

test('activity presenter: month names', () => {
    // test trim
    // ['', 'Jan', '']
    expect(Presenter.trim(['Jan', 'Jan', ''])).toEqual(['', 'Jan', ''])
    // ['Dec', '', 'Jan', '']
    expect(Presenter.trim(['Dec', '', 'Jan', 'Jan'])).toEqual(['Dec', '', 'Jan', ''])
})