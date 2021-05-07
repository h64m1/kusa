type ContainerProps = {
	/**
	 * What class to be used for months
	 */
	className: string
	/**
	 * What months to be shown
	 */
	months: string[]
}

type Props = {
	/**
	 * What class to be used for parent
	 */
	parentClassName?: string
} & ContainerProps

export type StyledProps = Props

const Component: React.VFC<Props> = (props) => {
	return (
		<div className={props.parentClassName}>
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
			className='w-4 text-xs'
			months={props.months}
		/>
	)
}
