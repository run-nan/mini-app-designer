import React from 'react'
import styled from 'styled-components'
import { Form, Input, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import useBrand from '@/store/brand'

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

const OverviewPage: React.FunctionComponent = () => {
  const { title, setBrand } = useBrand()
  const navigate = useNavigate()
  return (
    <StyledWrapper>
      <h1>这是App设计总览页</h1>
      <Form>
        <Form.Item label="设计版型">
          <Button type="primary" onClick={() => {
            navigate('/design')
          }}>设计版型</Button>
        </Form.Item>
        <Form.Item label="App名称">
          <Input value={title} onChange={(e) => {
            setBrand(brand => brand.title = e.target.value)
          }} />
        </Form.Item>
      </Form>
    </StyledWrapper>
  )
}

export default OverviewPage
