type Props = {
	/**
	 * What class to be used for day of the week
	 */
	className?: string
	/**
	 * What class to be used for parent
	 */
	parentClassName?: string
}

const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const Component: React.VFC<Props> = (props) => {
	return (
		<div className={props.parentClassName}>
			{dayOfWeek.map((e, i) => {
				return (
					<div key={i} className={props.className}>
						{e}
					</div>
				)
			})}
		</div>
	)
}

export const StyledComponent: React.VFC = () => {
	return (
		<Component parentClassName="flex-col space-y-1" className="text-xs" />
	)
}

export const Container: React.VFC = () => {
	return <StyledComponent />
}
