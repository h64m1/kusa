import 'tailwindcss/tailwind.css'
import * as Presenter from './presenter'

export type ContainerProps = {
	/**
	 * 0 <= stack <= 100
	 */
	stack: bigint
}

type Props = {
	/**
	 * What class to be used for cell
	 */
	className: string
}

export type StyledProps = {
	/**
	 * What background color class
	 */
	backgroundColorClass: string
}

const Component: React.VFC<Props> = (props) => {
	return <div className={props.className}>&nbsp;</div>
}

export const StyledComponent: React.VFC<StyledProps> = (props) => {
	const shapeProps = 'w-4 h-4 rounded border border-black'
	const backgroundColor = props.backgroundColorClass

	return <Component className={`${shapeProps} ${backgroundColor}`} />
}

export const Container: React.VFC<ContainerProps> = (props) => {
	// convert props.stack to background color
	const backgroundColor = Presenter.backgroundColor(props.stack)

	return <StyledComponent backgroundColorClass={backgroundColor} />
}
