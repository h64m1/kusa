import { GridContainer, GridContainerProps } from '../grid'
import { WeekContainer } from '../week'
import { MonthContainer } from '../month'

type CommonProps = {
	/**
	 * What months to be shown on top of grid container
	 */
	months: string[]
}

export type ContainerProps = GridContainerProps

type Props = {
	/**
	 * What class to be used for Activity
	 */
	className?: string
} & GridContainerProps &
	CommonProps

export type StyledProps = GridContainerProps & CommonProps

const Component: React.VFC<Props> = (props) => {
	return (
		<>
			<MonthContainer months={props.months} />
			<div className="flex flex-row space-x-1">
				<WeekContainer />
				<GridContainer
					beginDate={props.beginDate}
					endDate={props.endDate}
					stacks={props.stacks}
				/>
			</div>
		</>
	)
}

export const StyledComponent: React.VFC<StyledProps> = (props) => {
	const { months, ..._props } = props

	return (
		<Component
			className="flex flex-row space-x-1"
			months={months}
			{..._props}
		/>
	)
}

export const Container: React.VFC<ContainerProps> = (props) => {
	// FIXME: implement months
	const months: string[] = []

	return <StyledComponent months={months} {...props} />
}
