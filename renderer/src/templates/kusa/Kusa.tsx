import React from 'react'
import { ActivityContainer } from '../activity'
import { CardContainer } from '../card'
import { GridContainerProps } from '../grid'
import { day } from '../../../lib/day'

export type ContainerProps = {}

type Props = {
	/**
	 * What date to be shown in card component
	 */
	date: string
} & GridContainerProps
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
	const endDate = day.today()
	const beginDate = day.add(endDate, -1, 'year')

	const [date, setDate] = React.useState(endDate)

	const changeDate = (inputDate: string) => {
		setDate(inputDate)
		console.debug('changeDate', inputDate)
	}

	return (
		<StyledComponent
			beginDate={beginDate}
			endDate={endDate}
			stacks={[]}
			changeDate={changeDate}
			date={date}
		/>
	)
}
