import React from 'react'

type ContainerProps = {
    stack?: number // 0 <= stack <= 1
}

type Props = {
    backgroundColor: string // color code
}

export const Component: React.VFC<Props> = (props) => {
    return (
        <div style={{
            backgroundColor: props.backgroundColor
        }}></div>
    )
}

const Container: React.VFC<ContainerProps> = (props) => {
    // TODO: convert props.stack to color
    return <Component backgroundColor={'#000'} />
}

