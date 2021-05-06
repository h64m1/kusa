type Props = {
	/**
	 * What class to be used for week
	 */
	className?: string
}

export type StyledProps = Props

const Component: React.VFC<Props> = (props) => {
    const dayOfWeek = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
	return <div className={props.className}>
        {dayOfWeek.map(e => e)}
    </div>
}

export const StyledComponent: React.VFC<StyledProps> = (props) => {
	return <Component className={props.className} />
}
