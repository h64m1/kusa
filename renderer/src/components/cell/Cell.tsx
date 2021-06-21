import { MouseEventHandler } from 'react'
import 'tailwindcss/tailwind.css'
import * as Presenter from './presenter'

type CommonProps = {
	/**
	 * click action
	 */
	onClick: MouseEventHandler<HTMLDivElement>
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
	/**
	 * click event handler: change date
	 */
	changeDate?: (date: string)  => void
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
	return <div className={props.className}
		onClick={props.onClick}
	>&nbsp;</div>
}

export const StyledComponent: React.VFC<StyledProps> = (props) => {
	const shapeProps = 'w-4 h-4 rounded border border-black'
	const backgroundColor = props.backgroundColorClass

	return <Component className={`${shapeProps} ${backgroundColor}`}
		onClick={props.onClick}
	/>
}

export const Container: React.VFC<ContainerProps> = (props) => {
	// convert props.stack to background color
	const backgroundColor = Presenter.backgroundColor(props.stackNormalized)
	return <StyledComponent backgroundColorClass={backgroundColor}
		onClick={() => {
			// skip if changeDate is undefined
			if (props.changeDate === undefined) {
				return
			}
			props.changeDate(props.date)
		}}
	/>
}
