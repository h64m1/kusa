import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export type ContainerProps = {
	/**
	 * What class to be used
	 */
	className: string
	/**
	 * Selected date
	 */
	selected: Date
	/**
	 * onChange handler
	 */
	onChange?: (date: Date) => void
}

type Props = ContainerProps
export type StyledProps = Props

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
	return (
		<Component
			className={props.className}
			selected={props.selected}
			onChange={props.onChange}
		/>
	)
}

export const Container: React.VFC<ContainerProps> = (props) => {
	return (
		<StyledComponent
			className={props.className}
			selected={props.selected}
			onChange={props.onChange}
		/>
	)
}
