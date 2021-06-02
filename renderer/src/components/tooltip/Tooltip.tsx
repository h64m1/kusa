import { ReactNode } from 'react'
import './tooltip.module.css'

export type ContainerProps = {
	/**
	 * What message to be shown in the tooltip
	 */
	tooltipMessage: string
	/**
	 * What contents to be shown
	 */
	contents: ReactNode
}

type Props = ContainerProps
export type StyledProps = Props

const Component: React.VFC<Props> = (props) => {
	return (
		<span className="tooltip">
			<span className="tooltip-text">{props.tooltipMessage}</span>
			{props.contents}
		</span>
	)
}

export const StyledComponent: React.VFC<StyledProps> = (props) => {
	return (
		<Component
			tooltipMessage={props.tooltipMessage}
			contents={props.contents}
		/>
	)
}

export const Container: React.VFC<ContainerProps> = (props) => {
	return (
		<StyledComponent
			tooltipMessage={props.tooltipMessage}
			contents={props.contents}
		/>
	)
}
