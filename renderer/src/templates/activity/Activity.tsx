import { LegendContainer } from '../../components/legend'
import { MonthContainer } from '../../components/month'
import { WeekContainer } from '../../components/week'
import { GridContainer, GridContainerProps } from '../grid'
import * as Presenter from './presenter'

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
		<div>
			<MonthContainer months={props.months} />
			<div className="flex flex-row space-x-1">
				<WeekContainer />
				<GridContainer
					beginDate={props.beginDate}
					endDate={props.endDate}
					stacks={props.stacks}
					changeDate={props.changeDate}
				/>
			</div>
			<div className="mt-2 flex justify-end">
				<LegendContainer />
			</div>
		</div>
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
	// Show months (Jan, Feb, ...) on grid cells
	const _months = Presenter.months(props.beginDate, props.endDate)
	// Trim first & last elements
	const months = Presenter.trim(_months)

	return (
		<StyledComponent months={months} {...props} />
	)
}
