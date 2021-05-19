import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export type ContainerProps = {
	/**
	 * Selected date
	 */
	selected: Date
	/**
	 * onChange handler
	 */
	onChange?: (date: Date) => void
}

type Props = {
	/**
	 * What class to be used
	 */
	className: string
} & ContainerProps

export type StyledProps = ContainerProps

const Component: React.VFC<Props> = (props) => {
	const format = 'yyyy-MM-dd'
	return (
		<ReactDatePicker
			className={props.className}
			selected={props.selected}
			dateFormat={format}
			onChange={props.onChange}
		/>
	)
}

export const StyledComponent: React.VFC<StyledProps> = (props) => {
	const inputClassCommon =
		'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight'
	const inputClassFocus = 'focus:outline-none focus:shadow-outline'
	const inputClass = `${inputClassCommon} ${inputClassFocus}`

	return (
		<Component
			className={inputClass}
			selected={props.selected}
			onChange={props.onChange}
		/>
	)
}

export const Container: React.VFC<ContainerProps> = (props) => {
	return (
		<StyledComponent
			selected={props.selected}
			onChange={props.onChange}
		/>
	)
}
