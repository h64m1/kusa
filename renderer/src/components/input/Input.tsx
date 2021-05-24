export type ContainerProps = {
	/**
	 * What value to be used for form
	 */
	value: string
	/**
	 * What id to be used for input
	 */
	id: string
	/**
	 * Input type
	 */
	type?: string
	/**
	 * Input placeHolder
	 */
	placeHolder: string
}

type Props = {
	/**
	 * What class to be applied for input
	 */
	className?: string
} & ContainerProps

export type StyledProps = ContainerProps

const Component: React.VFC<Props> = (props) => {
	const type = props.type ?? 'text'
	return (
		<input
			className={props.className}
			id={props.id}
			type={type}
			placeholder={props.placeHolder}
		/>
	)
}

export const StyledComponent: React.VFC<StyledProps> = (props) => {
	const classCommon =
		'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight'
	const classFocus = 'focus:outline-none focus:shadow-outline'
	const className = `${classCommon} ${classFocus}`
	return (
		<Component
			className={className}
			id={props.id}
			type={props.type}
			placeHolder={props.placeHolder}
			value={props.value}
		/>
	)
}

export const Container: React.VFC<ContainerProps> = (props) => {
	return (
		<StyledComponent
			value={props.value}
			id={props.placeHolder}
			type={props.type}
			placeHolder={props.placeHolder}
		/>
	)
}
