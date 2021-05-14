import './tooltip.css'

type Props = {
	/**
	 * What message to be shown in the tooltip
	 */
	tooltipMessage: string
	/**
	 * What contents to be shown
	 */
	contents: string
}

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
