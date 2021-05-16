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
			<CellContainer date={'2000-01-01'} stack={0} stackNormalized={0} />
			<CellContainer
				date={'2000-01-01'}
				stack={25}
				stackNormalized={25}
			/>
			<CellContainer
				date={'2000-01-01'}
				stack={50}
				stackNormalized={50}
			/>
			<CellContainer
				date={'2000-01-01'}
				stack={75}
				stackNormalized={75}
			/>
			<CellContainer
				date={'2000-01-01'}
				stack={100}
				stackNormalized={100}
			/>
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
