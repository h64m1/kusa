import { GridContainer, GridContainerProps } from '../grid'
import { ContainerProps } from '../grid/Grid'
import { WeekContainer } from '../week'
import { MonthContainer } from '../month'

type Props = {
	/**
	 * What class to be used for Activity
	 */
	className?: string
} & GridContainerProps

export type StyledProps = ContainerProps

const Component: React.VFC<Props> = (props) => {
	const months = [
		'', '',
		'1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
		'11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
		'21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
		'31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
		'41', '42', '43', '44', '45', '46', '47', '48', '49', '50',
		'51', '52', '53',
	]

	return (
		<>
			<MonthContainer months={months} />
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
	return <Component className="flex flex-row space-x-1" {...props} />
}
