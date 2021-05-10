import { GridContainer, GridContainerProps } from '../grid'
import { WeekContainer } from '../week'
import { MonthContainer } from '../month'

type Props = {
	/**
	 * What class to be used for Activity
	 */
	className?: string
	/**
	 * What months to be shown on top of grid container
	 */
	months: string[]
} & GridContainerProps

export type StyledProps = Props

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
