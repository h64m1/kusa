import { day } from '../../../../lib/day'

/**
 * Create celss from beginDate to endDate
 * @param {string} beginDate begin date for grid cells
 * @param {string} endDate end date for grid cells
 */
export const gridCells = (beginDate: string, endDate: string): string[] => {
    const cells: string[] = []

    // return if beginDate > endDate
    if (day.diff(endDate, beginDate) < 0) {
        return cells
    }

    // - first cell: start of date (Sunday) in a week where beginDate belongs to
    // - last cell: last date (Saturday) in a week where endDate belongs to
    const start = day.startOf(beginDate, 'week')
    const end = day.endOf(endDate, 'week')

    const numberOfDate = day.diff(end, start)
    for (let i = 0; i < numberOfDate + 1; i++) {
        const date = day.add(start, i, 'day')
        cells.push(date)
    }

    return cells
}