import { MouseEventHandler } from 'react'
import { CellContainer, CellContainerProps } from '../../components/cell'
import { TooltipContainer } from '../../components/tooltip'

type CommonProps = {
	/**
	 * click action
	 */
	onClick: MouseEventHandler<HTMLDivElement>
}

export type ContainerProps = {
	/**
	 * click event handler: change date
	 */
	changeDate: (date: string) => void
} & CellContainerProps

type Props = CellContainerProps & CommonProps

export type StyledProps = Props

const Component: React.VFC<Props> = (props) => {
	const cell = (
		<CellContainer
			date={props.date}
			stack={props.stack}
			stackNormalized={props.stackNormalized}
		/>
	)
	return (
		<div onClick={props.onClick}>
			<TooltipContainer
				tooltipMessage={`${props.stack} on ${props.date}`}
				contents={cell}
			/>
		</div>
	)
}

export const StyledComponent: React.VFC<StyledProps> = (props) => {
	return (
		<Component
			date={props.date}
			stack={props.stack}
			stackNormalized={props.stackNormalized}
			onClick={props.onClick}
		/>
	)
}

export const Container: React.VFC<ContainerProps> = (props) => {
	return (
		<StyledComponent
			date={props.date}
			stack={props.stack}
			stackNormalized={props.stackNormalized}
			onClick={() => {
				props.changeDate(props.date)
			}}
		/>
	)
}
