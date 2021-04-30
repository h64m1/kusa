import { CellContainer } from '../cell'

export type ContainerProps = {
	/**
	 * Array of stacks
	 * - 0 <= stack <= 100
	 */
	stacks: Array<number>
}

export type StyledProps = ContainerProps

type Props = {
	/**
	 * What class to be used for Column
	 */
	className: string
} & ContainerProps

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
	return <Component className="flex-col space-y-1" stacks={props.stacks} />
}

export const Container: React.VFC<ContainerProps> = (props) => {
	return <StyledComponent stacks={props.stacks} />
}
