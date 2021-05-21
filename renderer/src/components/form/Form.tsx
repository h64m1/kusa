export type ContainerProps = {
	/**
	 * What label to be shown
	 */
	label: string
	/**
	 * What value to be used for form
	 */
	value: string
	/**
	 * What id to be used for input
	 */
	inputId: string
	/**
	 * Input type
	 */
	inputType: string
	/**
	 * Input placeHolder
	 */
	inputPlaceHolder: string
}

type Props = {
	/**
	 * What class to be applied for label
	 */
	labelClassName?: string
	/**
	 * What class to be applied for input
	 */
	inputClassName?: string
} & ContainerProps

export type StyledProps = ContainerProps

const Component: React.VFC<Props> = (props) => {
	return (
		<>
			<label className={props.labelClassName}>{props.label}</label>
			<input
				className={props.inputClassName}
				id={props.inputId}
				type={props.inputType}
				placeholder={props.inputPlaceHolder}
			/>
		</>
	)
}

export const StyledComponent: React.VFC<Props> = (props) => {
	const labelClass = 'block text-gray-700 text-sm font-bold mb-2'
	const inputClassCommon =
		'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight'
	const inputClassFocus = 'focus:outline-none focus:shadow-outline'
	const inputClass = `${inputClassCommon} ${inputClassFocus}`

	return (
		<Component
			label={props.label}
			labelClassName={labelClass}
			inputClassName={inputClass}
			inputId={props.inputId}
			inputType={props.inputType}
			inputPlaceHolder={props.inputPlaceHolder}
			value={props.value}
		/>
	)
}
