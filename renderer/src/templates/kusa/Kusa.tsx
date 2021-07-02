import React from 'react'
import { ActivityContainer, ActivityContainerProps } from '../activity'
import { CardContainer, CardContainerProps } from '../card'
import * as GridPresenter from '../grid/presenter'

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
	 * Activity cell
	 */
	stacks: GridPresenter.GridCell[]
	/**
	 * change event for activity cell
	 */
	onChangeStacks: (stack: GridPresenter.GridCell) => void
}

type Props = ActivityContainerProps & CardContainerProps
export type StyledProps = Props

const Component: React.VFC<Props> = (props) => {
	return (
		<div className="ml-8 flex flex-row space-x-4">
			<ActivityContainer
				beginDate={props.beginDate}
				endDate={props.endDate}
				stacks={props.stacks}
				changeDate={props.changeDate}
			/>
			<CardContainer
				date={props.date}
				onChangeActivities={props.onChangeActivities}
			/>
		</div>
	)
}

export const StyledComponent: React.VFC<StyledProps> = (props) => {
	return (
		<Component
			beginDate={props.beginDate}
			endDate={props.endDate}
			stacks={props.stacks}
			changeDate={props.changeDate}
			date={props.date}
			onChangeActivities={props.onChangeActivities}
		/>
	)
}

export const Container: React.VFC<ContainerProps> = (props) => {
	const [date, setDate] = React.useState(props.endDate)
	const [stack, setActivities] = React.useState(0)

	const changeActivities = (activities: number) => {
		setActivities(activities)
	}

	const changeDate = (inputDate: string) => {
		setDate(inputDate)
		console.debug('changeDate', inputDate)

		props.onChangeStacks({
			date: date,
			stack: stack
		})
	}

	return (
		<StyledComponent
			beginDate={props.beginDate}
			endDate={props.endDate}
			stacks={props.stacks}
			changeDate={changeDate}
			date={date}
			onChangeActivities={changeActivities}
		/>
	)
}
