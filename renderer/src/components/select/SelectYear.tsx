type Props = {
	/**
	 * What class to be applied for parent node
	 */
	className: string
	/**
	 * Array of year (YYYY)
	 */
	years: string[]
	/**
	 * Selected index
	 */
	selected: number
}

export type StyledProps = {
	/**
	 * Array of year (YYYY)
	 */
	years: string[]
	/**
	 * Selected index
	 */
	selected: number
}

const Component: React.VFC<Props> = (props) => {
	const baseClassName = 'hover:bg-gray-100 font-bold w-12'
	return (
		<div className={props.className}>
			{props.years.map((year, index) => {
				const selected =
					index === props.selected ? 'border-b-2 border-black' : ''
				const className = `${baseClassName} ${selected}`
				return (
					// TODO: implement onClick action
					<button key={index} className={className}>
						{year}
					</button>
				)
			})}
		</div>
	)
}

export const StyledComponent: React.VFC<StyledProps> = (props) => {
	const className = 'flex flex-row space-x-2'
	return (
		<Component
			className={className}
			years={props.years}
			selected={props.selected}
		/>
	)
}

export const Container: React.VFC = () => {
    // TODO: implement logig to show 5 years up to this year
	return <StyledComponent years={[]} selected={0} />
}
