import { ActivityContainer } from '../activity'
import { CardContainer } from '../card'
import { GridContainerProps } from '../grid'

type Props = {} & GridContainerProps
export type StyledProps = Props

const Component: React.VFC<Props> = (props) => {
	// TODO: define state in container
	// TODO: need date props for card container
	return (
		<div>
			<ActivityContainer
				beginDate={props.beginDate}
				endDate={props.endDate}
				stacks={props.stacks}
				changeDate={props.changeDate}
			/>
			<CardContainer date={props.endDate} />
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
		/>
	)
}
