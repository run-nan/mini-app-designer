import React from 'react'
import { useImmer } from 'use-immer'
import { createContainer } from 'unstated-next'
import type { AppConfig } from './types'

const initialConfig: AppConfig = {
  brand: {
    logo: '',
    title: ''
  },
  members: {
    header: {
      title: ''
    },
    content: [],
    footer: {}
  },
  mall: [],
  shoppingCar: [],
  notification: {}
}

const useAppConfig = (initialValue: AppConfig = initialConfig) => {
  const [appConfig, setAppConfig] = useImmer<AppConfig>(initialValue)
  React.useEffect(() => {
    
  }, [appConfig])
  return {
    appConfig,
    setAppConfig
  }
}

const Store = createContainer(useAppConfig)

export default Store

