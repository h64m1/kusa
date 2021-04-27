import 'tailwindcss/tailwind.css'

type ContainerProps = {
	stack?: number // 0 <= stack <= 1
}

type Props = {
    /**
     * What class to be used for cell
     */
	className: string
}

// type CellLevel = 'Lowest' | 'Low' | 'Middle' | 'High' | 'Highest'

export type StyledProps = {
    /**
     * What background color class
     */
    backgroundColorClass: string
}

const Component: React.VFC<Props> = (props) => {
	return <div className={props.className}>&nbsp;</div>
}

export const StyledComponent: React.VFC<StyledProps> = (props) => {
    const shapeProps = 'w-4 h-4 rounded border border-black'
    const backgroundColor = props.backgroundColorClass

	return <Component className={`${shapeProps} ${backgroundColor}`} />
}

const Container: React.VFC<ContainerProps> = (props) => {
	// TODO: convert props.stack to color
	return <StyledComponent backgroundColorClass={'bg-green-100'} />
}
