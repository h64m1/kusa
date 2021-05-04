import { CellContainer } from '../cell'
import * as Presenter from './presenter'
import { day } from '../../../../lib/day'

type GridCell = {
    /**
     * date: YYYY-MM-DD format
     */
    date: string
    /**
     * 0 <= stack <= 100
     */
    stack: number
}

export type ContainerProps = {
    /**
     * begin date: YYYY-MM-DD
     */
    beginDate: string
    /**
     * end date: YYYY-MM-DD
     */
    endDate: string
    /**
     * Active cell
     */
    stacks: GridCell[]
}


type Props = {
	/**
	 * What class to be used for Column
	 */
	className?: string
	/**
	 * Array of stacks
	 */
	stacks: number[]
}

export type StyledProps = Props

const Component: React.VFC<Props> = (props) => {
	return (
		<div className={props.className}>
			{props.stacks.map((e, i) => (
				<CellContainer key={i} stack={e} />
			))}
		</div>
	)
}

export const StyledComponent: React.VFC<StyledProps> = (props) => {
	return (
		<Component
			className="grid grid-flow-col grid-rows-7 auto-cols-min gap-1"
			stacks={props.stacks}
		/>
	)
}

export const Container: React.VFC<ContainerProps> = (props) => {
	// array of dates from beginDate to endDate
	const dates = Presenter.gridCells(props.beginDate, props.endDate)

	// Convert GridCell array to number array
	const stacks = dates.map(date => {
		// Find the same date from props.stacks, return stack
		const cell = props.stacks.find(e => day.isSame(e.date, date))
		if (cell === undefined) {
			return 0
		}

		return cell.stack
	})

	return <StyledComponent stacks={stacks} />
}
