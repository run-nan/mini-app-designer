import Store from '@/store'
import type { Header } from '@/store/types'

const useHeader = () => {
  const { appConfig, setAppConfig } = Store.useContainer()
  const setHeader = (callback: (data: Header) => void) => {
    setAppConfig(draft => {
      callback(draft.members.header)
    })
  }
  const replaceHeader = (data: Header) => {
    setAppConfig(draft => draft.members.header = data)
  }
  return {
    config: appConfig.members.header,
    setHeader,
    replaceHeader
  }
}

export default useHeader