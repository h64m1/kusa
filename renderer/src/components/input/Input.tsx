import { ChangeEventHandler } from 'react'

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
	/**
	 * change event handler
	 */
	onChange: ChangeEventHandler<HTMLInputElement>
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
			value={props.value}
			id={props.id}
			type={type}
			placeholder={props.placeHolder}
			className={props.className}
			onChange={props.onChange}
		/>
	)
}

export const StyledComponent: React.VFC<StyledProps> = (props) => {
	const classCommon =
		'shadow appearance-none border rounded w-10/12 py-2 px-3 text-gray-700 leading-tight'
	const classFocus = 'focus:outline-none focus:shadow-outline'
	const className = `${classCommon} ${classFocus}`
	return (
		<Component
			value={props.value}
			id={props.id}
			type={props.type}
			placeHolder={props.placeHolder}
			className={className}
			onChange={props.onChange}
		/>
	)
}

export const Container: React.VFC<ContainerProps> = (props) => {
	return (
		<StyledComponent
			value={props.value}
			id={props.id}
			type={props.type}
			placeHolder={props.placeHolder}
			onChange={props.onChange}
		/>
	)
}
