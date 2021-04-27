import * as Presenter from '../presenter'

test('cell presenter: background color', () => {
    expect(Presenter.backgroundColor(0n)).toBe('bg-green-900')
})