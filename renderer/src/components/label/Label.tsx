export type ContainerProps = {
	/**
	 * What label to be shown
	 */
	label: string
}

type Props = {
	/**
	 * What class to be applied for label
	 */
	labelClassName?: string
} & ContainerProps

export type StyledProps = ContainerProps

const Component: React.VFC<Props> = (props) => {
	return <label className={props.labelClassName}>{props.label}</label>
}

export const StyledComponent: React.VFC<StyledProps> = (props) => {
	const labelClass = 'block text-gray-700 text-sm font-bold mb-2'
	return <Component label={props.label} labelClassName={labelClass} />
}

export const Container: React.VFC<ContainerProps> = (props) => {
	return <StyledComponent label={props.label} />
}
