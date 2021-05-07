import { GridContainer, GridContainerProps } from '../grid'

type Props = GridContainerProps
export type StyledProps = Props

const Component: React.VFC<Props> = (props) => {
	return (
		<GridContainer
			beginDate={props.beginDate}
			endDate={props.endDate}
			stacks={props.stacks}
		/>
	)
}

export const StyledComponent: React.VFC<StyledProps> = (props) => {
    return <Component {...props} />
}
