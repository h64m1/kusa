import { LabelContainer, LabelContainerProps } from '../label'

export type ContainerProps = {
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
	inputType?: string
	/**
	 * Input placeHolder
	 */
	inputPlaceHolder: string
} & LabelContainerProps

type Props = {
	/**
	 * What class to be applied for input
	 */
	inputClassName?: string
} & ContainerProps

export type StyledProps = ContainerProps

const Component: React.VFC<Props> = (props) => {
	const inputType = props.inputType ?? 'text'
	return (
		<>
			<LabelContainer label={props.label} />
			<input
				className={props.inputClassName}
				id={props.inputId}
				type={inputType}
				placeholder={props.inputPlaceHolder}
			/>
		</>
	)
}

export const StyledComponent: React.VFC<StyledProps> = (props) => {
	const inputClassCommon =
		'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight'
	const inputClassFocus = 'focus:outline-none focus:shadow-outline'
	const inputClass = `${inputClassCommon} ${inputClassFocus}`

	return (
		<Component
			label={props.label}
			inputClassName={inputClass}
			inputId={props.inputId}
			inputType={props.inputType}
			inputPlaceHolder={props.inputPlaceHolder}
			value={props.value}
		/>
	)
}

export const Container: React.VFC<ContainerProps> = (props) => {
	return (
		<StyledComponent
			label={props.label}
			value={props.value}
			inputId={props.inputPlaceHolder}
			inputType={props.inputType}
			inputPlaceHolder={props.inputPlaceHolder}
		/>
	)
}
