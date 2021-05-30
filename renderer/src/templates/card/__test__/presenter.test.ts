import { act, renderHook } from '@testing-library/react-hooks'
import * as Presenter from '../presenter'

test('activities custom hook', () => {
    const { result } = renderHook(() => Presenter.useActivities([]))

    // initial value
    expect(result.current.activities).toStrictEqual([])

    // Push new activity
    act(() => {
        result.current.pushActivity()
    })

    expect(result.current.activities).toStrictEqual([''])
})