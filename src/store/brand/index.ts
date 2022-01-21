import Store from '@/store'
import type { Brand } from '@/store/types'

const useBrand = () => {
  const { appConfig, setAppConfig } = Store.useContainer()
  const setBrand = (callback: (data: Brand) => void) => {
    setAppConfig(draft => {
      callback(draft.brand)
    })
  }
  const replaceBrand = (data: Brand) => {
    setAppConfig(draft => draft.brand = data)
  }
  return {
    title: appConfig.brand.title,
    logo: appConfig.brand.logo,
    setBrand,
    replaceBrand
  }
}

export default useBrand