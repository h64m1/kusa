import { CellContainer } from '../cell'

export type ContainerProps = {
	/**
	 * Array of stacks
	 */
	stacks: number[]
}

type Props = {
	/**
	 * What class to be used for Column
	 */
	className?: string
} & ContainerProps

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
	return <StyledComponent stacks={props.stacks} />
}
