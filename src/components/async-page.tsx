import React from 'react'

interface Props {
  src: () => Promise<{ default: React.FunctionComponent }>
}

const AsyncPage: React.FunctionComponent<Props> = (props) => {
  const Component = React.lazy(props.src)
  return (
    <Component />
  )
}

export default AsyncPage