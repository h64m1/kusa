import { LabelContainer, LabelContainerProps } from '../../components/label'
import { InputContainer, InputContainerProps } from '../../components/input'

export type ContainerProps = InputContainerProps & LabelContainerProps

type Props = ContainerProps

export type StyledProps = ContainerProps

const Component: React.VFC<Props> = (props) => {
	return (
		<>
			<LabelContainer label={props.label} />
			<InputContainer
				value={props.value}
				id={props.id}
				type={props.type}
				placeHolder={props.placeHolder}
				onChange={props.onChange}
			/>
		</>
	)
}

export const StyledComponent: React.VFC<StyledProps> = (props) => {
	return (
		<Component
			label={props.label}
			id={props.id}
			type={props.type}
			placeHolder={props.placeHolder}
			value={props.value}
			onChange={props.onChange}
		/>
	)
}

export const Container: React.VFC<ContainerProps> = (props) => {
	return (
		<StyledComponent
			label={props.label}
			value={props.value}
			id={props.placeHolder}
			type={props.type}
			placeHolder={props.placeHolder}
			onChange={props.onChange}
		/>
	)
}
