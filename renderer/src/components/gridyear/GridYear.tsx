import { GridContainer } from "../grid"


type Props = {
    stacks: number[]
}

const Component: React.VFC<Props> = (props) => {
    return <GridContainer stacks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31]} />
}