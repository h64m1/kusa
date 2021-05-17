import { CellContainer } from '../cell'
import { TooltipContainer } from '../tooltip'
import * as Presenter from './presenter'

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
	stacks: Presenter.GridCell[]
}

type Props = {
	/**
	 * What class to be used for Column
	 */
	className?: string
	/**
	 * Array of date
	 */
	dates: string[]
	/**
	 * Array of stacks
	 */
	stacks: number[]
	/**
	 * Array of normalized stacks
	 */
	stacksNormalized: number[]
}

export type StyledProps = Props

const Component: React.VFC<Props> = (props) => {
	return (
		<div className={props.className}>
			{props.dates.map((e, i) => {
				const date = e
				const stack = props.stacks[i]
				const stackNormalized = props.stacksNormalized[i]
				const cell = (
					<CellContainer
						date={date}
						stack={stack}
						stackNormalized={stackNormalized}
					/>
				)
				return (
					<TooltipContainer
						key={i}
						tooltipMessage={`${stack} on ${date}`}
						contents={cell}
					/>
				)
			})}
		</div>
	)
}

export const StyledComponent: React.VFC<StyledProps> = (props) => {
	return (
		<Component
			className="grid grid-flow-col grid-rows-7 auto-cols-min gap-1"
			dates={props.dates}
			stacks={props.stacks}
			stacksNormalized={props.stacksNormalized}
		/>
	)
}

export const Container: React.VFC<ContainerProps> = (props) => {
	// Array of dates from beginDate to endDate
	const dates = Presenter.gridCells(props.beginDate, props.endDate)
	// Convert GridCell array to number array
	const stacks = Presenter.findStackCells(dates, props.stacks)
	// Calculate normalized stacks
	const stacksNormalized = Presenter.normalize(stacks)

	return (
		<StyledComponent
			dates={dates}
			stacks={stacks}
			stacksNormalized={stacksNormalized}
		/>
	)
}
