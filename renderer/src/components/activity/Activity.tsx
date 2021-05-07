import { GridContainer, GridContainerProps } from '../grid'
import { ContainerProps } from '../grid/Grid'
import { WeekContainer } from '../week'

type Props = {
	/**
	 * What class to be used for Activity
	 */
	className?: string
} & GridContainerProps

export type StyledProps = ContainerProps

const Component: React.VFC<Props> = (props) => {
	return (
		<div className={props.className}>
			<WeekContainer />
			<GridContainer
				beginDate={props.beginDate}
				endDate={props.endDate}
				stacks={props.stacks}
			/>
		</div>
	)
}

export const StyledComponent: React.VFC<StyledProps> = (props) => {
	return <Component className="flex flex-row space-x-1" {...props} />
}
