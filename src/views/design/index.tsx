import React from 'react'
import styled from 'styled-components'
import useBrand from '@/store/brand'
import useContent from '@/store/members/content'

const Root = styled.div`
  padding: 32px;
  > h1 {
    font-size: 32px;
  }
`

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`

const DesignPage: React.FunctionComponent = () => {
  const { title } = useBrand()
  return (
    <Root>
      <div>
        <h1>这是App设计页 - {title}</h1>
      </div>
      <FlexWrapper>
        
      </FlexWrapper>
    </Root>
  )
}

export default DesignPage