import React from 'react'
import * as Presenter from './presenter'

type CommonProps = {
	/**
	 * Array of year (YYYY)
	 */
	years: string[]
	/**
	 * Selected index
	 */
	selected: number
	/**
	 * set selected state
	 */
	setSelected: (index: number) => void
}

type Props = {
	/**
	 * What class to be applied for parent node
	 */
	className: string
} & CommonProps

export type StyledProps = CommonProps

const Component: React.VFC<Props> = (props) => {
	const baseClassName = 'hover:bg-gray-100 font-bold w-12'
	return (
		<div className={props.className}>
			{props.years.map((year, index) => {
				const selected =
					index === props.selected ? 'border-b-2 border-black' : ''
				const className = `${baseClassName} ${selected}`
				return (
					// TODO: implement onClick action
					<button
						key={index}
						className={className}
						onClick={() => {
							props.setSelected(index)
							console.debug('select year click', year, index)
						}}
					>
						{year}
					</button>
				)
			})}
		</div>
	)
}

export const StyledComponent: React.VFC<StyledProps> = (props) => {
	const className = 'flex flex-row space-x-2'
	return (
		<Component
			className={className}
			years={props.years}
			selected={props.selected}
			setSelected={props.setSelected}
		/>
	)
}

export const Container: React.VFC = () => {
	const years = Presenter.years()

	// TODO: implement custom hook
	const [selected, setSelected] = React.useState(years.length-1)

	return <StyledComponent years={years} selected={selected} setSelected={setSelected} />
}
