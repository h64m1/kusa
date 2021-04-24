import React from 'react'

type ContainerProps = {
    stack?: number // 0 <= stack <= 1
}

type Props = Required<ContainerProps>

export const Component: React.VFC<Props> = (props) => {
    // TODO: convert props.stack to color
    const color = '#000'
    return (
        <div style={{
            backgroundColor: color
        }}></div>
    )
}

const Container: React.VFC<ContainerProps> = (props) => {
    return <Component stack={0} />
}

