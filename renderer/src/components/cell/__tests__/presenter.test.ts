import * as Presenter from '../presenter'

test('cell presenter: background color', () => {
    // Lowest
    expect(Presenter.backgroundColor(0)).toBe('bg-gray-900')
    expect(Presenter.backgroundColor(-10)).toBe('bg-gray-900')
    expect(Presenter.backgroundColor(2000)).toBe('bg-gray-900')
    // Low
    expect(Presenter.backgroundColor(1)).toBe('bg-green-900')
    expect(Presenter.backgroundColor(12)).toBe('bg-green-900')
    expect(Presenter.backgroundColor(25)).toBe('bg-green-900')
    // Middle
    expect(Presenter.backgroundColor(26)).toBe('bg-green-700')
    expect(Presenter.backgroundColor(34)).toBe('bg-green-700')
    expect(Presenter.backgroundColor(50)).toBe('bg-green-700')
    // High
    expect(Presenter.backgroundColor(51)).toBe('bg-green-500')
    expect(Presenter.backgroundColor(67)).toBe('bg-green-500')
    expect(Presenter.backgroundColor(75)).toBe('bg-green-500')
    // Highest
    expect(Presenter.backgroundColor(76)).toBe('bg-green-300')
    expect(Presenter.backgroundColor(90)).toBe('bg-green-300')
    expect(Presenter.backgroundColor(100)).toBe('bg-green-300')
})