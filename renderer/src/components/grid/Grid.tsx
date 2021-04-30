import { ColumnContainer, ColumnContainerProps } from "../column"

type Props = ColumnContainerProps

const Component: React.VFC<Props> = (props) => {
    return <ColumnContainer stacks={[1, 30, 60]} />
}
