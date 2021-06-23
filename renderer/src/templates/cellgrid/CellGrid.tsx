import { CellContainer, CellContainerProps } from '../../components/cell'
import { TooltipContainer } from '../../components/tooltip'

export type ContainerProps = CellContainerProps

type Props = ContainerProps

export type StyledProps = {
} & ContainerProps

const Component: React.VFC<Props> = (props) => {
	const cell = (
		<CellContainer
			date={props.date}
			stack={props.stack}
			stackNormalized={props.stackNormalized}
		/>
	)
	return (
		<div>
			<TooltipContainer
				tooltipMessage={`${props.stack} on ${props.date}`}
				contents={cell}
			/>
		</div>
	)
}

export const StyledComponent: React.VFC<StyledProps> = (props) => {
	return <Component
		date={props.date}
		stack={props.stack}
		stackNormalized={props.stackNormalized}
	/>
}
