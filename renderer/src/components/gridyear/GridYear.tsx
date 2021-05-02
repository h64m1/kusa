import { GridContainer } from "../grid"


type Props = {
    stacks: number[]
}

export type StyledProps = Props

const Component: React.VFC<Props> = (props) => {
    return <GridContainer stacks={props.stacks} />
}

export const StyledComponent: React.VFC<StyledProps> = (props) => {
    return <Component stacks={props.stacks} />
}
