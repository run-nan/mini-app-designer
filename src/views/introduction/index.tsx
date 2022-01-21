import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  > * {
    margin-bottom: 16px;
  }
  > h1 {
    font-size: 64px;
  }
`

const selectOptions = [
  { label: '会员专区', value: 'member' },
  { label: '商城', value: 'shopCar' }
]

const IntroductionPage: React.FunctionComponent = () => {
  const navigate = useNavigate()
  return (
    <StyledWrapper>
      <h1>这里是欢迎页</h1>
      <Button type='primary' onClick={() => navigate('/overview')}>选择App版型</Button>
    </StyledWrapper>
  )
}

export default IntroductionPage