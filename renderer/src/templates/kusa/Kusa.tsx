import React from 'react'
import { ActivityContainer, ActivityContainerProps } from '../activity'
import { CardContainer } from '../card'
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
	onChangeStacks: (stacks: GridPresenter.GridCell[]) => void
}

type Props = ActivityContainerProps & {
	/**
	 * What date to be shown in card component
	 */
	date: string
}
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
			<CardContainer date={props.date} />
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
		/>
	)
}

export const Container: React.VFC<ContainerProps> = (props) => {
	const [date, setDate] = React.useState(props.endDate)
	const stacks = props.stacks
	// TODO: implement on change event for stacks
	// props.onChangeStacks

	const changeDate = (inputDate: string) => {
		setDate(inputDate)
		console.debug('changeDate', inputDate)
	}

	return (
		<StyledComponent
			beginDate={props.beginDate}
			endDate={props.endDate}
			stacks={stacks}
			changeDate={changeDate}
			date={date}
		/>
	)
}
