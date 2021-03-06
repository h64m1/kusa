export type ContainerProps = {
	/**
	 * What months to be shown
	 */
	months: string[]
}

type Props = {
	/**
	 * x-direction width for the 1st element
	 */
	marginXatFirstColumn: string
	/**
	 * What class to be used for months
	 */
	className: string
	/**
	 * What class to be used for parent
	 */
	parentClassName?: string
} & ContainerProps

export type StyledProps = ContainerProps

const Component: React.VFC<Props> = (props) => {
	return (
		<div className={props.parentClassName}>
			{/* space for week of the day */}
			<div className={props.marginXatFirstColumn} />
			{/* months */}
			{props.months.map((e, i) => {
				return (
					<div key={i} className={props.className}>
						{e}
					</div>
				)
			})}
		</div>
	)
}

export const StyledComponent: React.VFC<StyledProps> = (props) => {
	return (
		<Component
			parentClassName="grid grid-flow-col grid-row-1 auto-cols-min gap-1"
			className="w-4 text-xs"
			marginXatFirstColumn="w-6"
			months={props.months}
		/>
	)
}

export const Container: React.VFC<ContainerProps> = (props) => {
	return <StyledComponent months={props.months} />
}
