import { CellContainer } from '../cell'

export type ContainerProps = {
	/**
	 * 日付
	 */
	dates: Array<string>
	/**
	 * Array of stacks
	 */
	stacks: Array<number>
	/**
	 * Array of stacks
	 * - 0 <= stack <= 100
	 */
	stacksNormalized: Array<number>
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
			{props.dates.map((e, i) => {
				const date = e
				const stack = props.stacks[i]
				const stackNormalized = props.stacksNormalized[i]
				return (
					<CellContainer
						key={i}
						date={date}
						stack={stack}
						stackNormalized={stackNormalized}
					/>
				)
			})}
		</div>
	)
}

export const StyledComponent: React.VFC<StyledProps> = (props) => {
	return (
		<Component
			className="flex-col space-y-1"
			dates={props.dates}
			stacks={props.stacks}
			stacksNormalized={props.stacksNormalized}
		/>
	)
}

export const Container: React.VFC<ContainerProps> = (props) => {
	return (
		<StyledComponent
			dates={props.dates}
			stacks={props.stacks}
			stacksNormalized={props.stacksNormalized}
		/>
	)
}
