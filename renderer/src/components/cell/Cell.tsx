import "tailwindcss/tailwind.css";

type ContainerProps = {
	stack?: number // 0 <= stack <= 1
}

export type Props = {
	backgroundColor?: string // color code
}

export const Component: React.VFC<Props> = (props) => {
	return (
		<div
			className="w-4 h-4"
			style={{
				backgroundColor: props.backgroundColor,
			}}
		>
			&nbsp;
		</div>
	)
}

const Container: React.VFC<ContainerProps> = (props) => {
	// TODO: convert props.stack to color
	return <Component backgroundColor={'#000'} />
}
