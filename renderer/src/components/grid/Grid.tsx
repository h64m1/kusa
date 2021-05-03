import { CellContainer } from '../cell'

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

type ContainerProps = {
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
	// FIXME: convert GridCell array to number array
	const stacks = props.stacks.map(e => e.stack)

	return <StyledComponent stacks={stacks} />
}
