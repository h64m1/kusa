import { act, renderHook } from '@testing-library/react-hooks'
import * as Presenter from '../presenter'

test('activities custom hook', () => {
    const { result } = renderHook(() => Presenter.useActivities(''))

    // initial value
    expect(result.current.activities).toStrictEqual([])

    // Push new activity
    act(() => {
        result.current.pushActivity()
    })
    expect(result.current.activities).toStrictEqual([''])

    // [''] -> ['','']
    act(() => {
        result.current.pushActivity()
    })
    expect(result.current.activities).toStrictEqual(['',''])

    // ['','test']
    act(() => {
        result.current.changeActivity(1, 'test')
    })
    expect(result.current.activities).toStrictEqual(['','test'])

    // remove 2nd activity
    act(() => {
        result.current.removeActivity(1)
    })
    expect(result.current.activities).toStrictEqual([''])

    // do not remove last element
    act(() => {
        result.current.removeActivity(0)
    })
    expect(result.current.activities).toStrictEqual([''])
})