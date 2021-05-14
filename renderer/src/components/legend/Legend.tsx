import { CellContainer } from '../cell'

type Props = {
    /**
     * What class to be used for Legend
     */
    className: string
}

const Component: React.VFC<Props> = (props) => {
    const textSize = 'text-xs'
	return (
		<div className={props.className}>
			<div className={textSize}>Low</div>
			<CellContainer stack={0} />
			<CellContainer stack={25} />
			<CellContainer stack={50} />
			<CellContainer stack={75} />
			<CellContainer stack={100} />
			<div className={textSize}>High</div>
        </div>
	)
}

export const StyledComponent: React.VFC = () => {
	return <Component className="flex flex-row space-x-1" />
}

export const Container: React.VFC = () => {
	return <StyledComponent />
}
