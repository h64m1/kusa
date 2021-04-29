import { CellContainer, CellContainerProps } from '../cell'

type Props = {
	stacks: Array<bigint>
}

const Component: React.VFC<Props> = (props) => {
	return (
		<div className="flex-col">
			{props.stacks.map((e, i) => (
				<CellContainer key={i} stack={e} />
			))}
        </div>
	)
}
