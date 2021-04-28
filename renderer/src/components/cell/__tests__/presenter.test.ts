import * as Presenter from '../presenter'

test('cell presenter: background color', () => {
    // Lowest
    expect(Presenter.backgroundColor(0n)).toBe('bg-gray-900')
    expect(Presenter.backgroundColor(-10n)).toBe('bg-gray-900')
    expect(Presenter.backgroundColor(2000n)).toBe('bg-gray-900')
    // Low
    expect(Presenter.backgroundColor(1n)).toBe('bg-green-900')
    expect(Presenter.backgroundColor(12n)).toBe('bg-green-900')
    expect(Presenter.backgroundColor(25n)).toBe('bg-green-900')
    // Middle
    expect(Presenter.backgroundColor(26n)).toBe('bg-green-700')
    expect(Presenter.backgroundColor(34n)).toBe('bg-green-700')
    expect(Presenter.backgroundColor(50n)).toBe('bg-green-700')
    // High
    expect(Presenter.backgroundColor(51n)).toBe('bg-green-500')
    expect(Presenter.backgroundColor(67n)).toBe('bg-green-500')
    expect(Presenter.backgroundColor(75n)).toBe('bg-green-500')
    // Highest
    expect(Presenter.backgroundColor(76n)).toBe('bg-green-300')
    expect(Presenter.backgroundColor(90n)).toBe('bg-green-300')
    expect(Presenter.backgroundColor(100n)).toBe('bg-green-300')
})