import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export type ContainerProps = {
	/**
	 * Selected date
	 */
	selected: Date
	/**
	 * Make input form read only if readOnly = true
	 */
	readOnly: boolean
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
			readOnly={props.readOnly}
			onChange={
				props.onChange
					? props.onChange
					: () => {
							return
					  }
			}
		/>
	)
}

export const StyledComponent: React.VFC<StyledProps> = (props) => {
	const inputClassCommon =
		'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight'
	const inputClassFocus = 'focus:outline-none focus:shadow-outline'
	const inputReadOnly = props.readOnly ? 'bg-yellow-200' : ''
	const inputClass = `${inputClassCommon} ${inputClassFocus} ${inputReadOnly}`

	return (
		<Component
			className={inputClass}
			selected={props.selected}
			readOnly={props.readOnly}
			onChange={props.onChange}
		/>
	)
}

export const Container: React.VFC<ContainerProps> = (props) => {
	return (
		<StyledComponent
			selected={props.selected}
			readOnly={props.readOnly}
			onChange={props.onChange}
		/>
	)
}
