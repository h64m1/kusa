import { CellContainer } from '../cell'

const Component: React.VFC = () => {
	return (
		<>
			<div>Low</div>
			<CellContainer stack={0} />
			<CellContainer stack={25} />
			<CellContainer stack={50} />
			<CellContainer stack={75} />
			<CellContainer stack={100} />
			<div>High</div>
		</>
	)
}

export const StyledComponent: React.VFC = () => {
	return <Component />
}

export const Container: React.VFC = () => {
	return <StyledComponent />
}
