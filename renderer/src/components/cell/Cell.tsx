import { MouseEventHandler } from 'react'
import 'tailwindcss/tailwind.css'
import * as Presenter from './presenter'

type CommonProps = {
	/**
	 * Event handler on focus
	 */
	onHover: MouseEventHandler<HTMLDivElement>
}

export type ContainerProps = {
	/**
	 * date (YYYY-MM-DD)
	 */
	date: string
	/**
	 * original stack value
	 */
	stack: number
	/**
	 * 0 <= stack <= 100
	 */
	stackNormalized: number
}

type Props = {
	/**
	 * What class to be used for cell
	 */
	className: string
} & CommonProps

export type StyledProps = {
	/**
	 * What background color class
	 */
	backgroundColorClass: string
} & CommonProps

const Component: React.VFC<Props> = (props) => {
	return (
		<div className={props.className} onMouseEnter={props.onHover}>
			&nbsp;
		</div>
	)
}

export const StyledComponent: React.VFC<StyledProps> = (props) => {
	const shapeProps = 'w-4 h-4 rounded border border-black'
	const backgroundColor = props.backgroundColorClass

	return (
		<Component
			className={`${shapeProps} ${backgroundColor}`}
			onHover={props.onHover}
		/>
	)
}

export const Container: React.VFC<ContainerProps> = (props) => {
	// convert props.stack to background color
	const backgroundColor = Presenter.backgroundColor(props.stackNormalized)
	return (
		<StyledComponent
			backgroundColorClass={backgroundColor}
			onHover={() => {
				return console.debug('props', props)
			}}
		/>
	)
}
