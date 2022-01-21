import Store from '@/store'
import type { Member, Carousel } from '@/store/types'

type ContentItem = Member | Carousel

const useContent = () => {
  const { appConfig, setAppConfig } = Store.useContainer()
  const content = appConfig.members.content
  const setContentItem = <T extends ContentItem>(index: number, callback: (data: T) => void) => {
    setAppConfig(draft => {
      callback(draft.members.content[index] as T)
    })
  }
  const replaceContentItem = <T extends ContentItem>(index: number, data: T) => {
    setAppConfig(draft => {
      draft.members.content[index] = data
    })
  }
  const addContentItem = <T extends ContentItem>(data: T) => {
    setAppConfig(draft => {
      draft.members.content.push(data)
    })
  }
  const deleteContentItem = (index: number) => {
    setAppConfig(draft => {
      draft.members.content.splice(index, 1)
    })
  }
  const changePosition = (oldIndex: number, newIndex: number) => {
    setAppConfig(draft => {
      const item = draft.members.content[oldIndex]
      draft.members.content.splice(oldIndex, 1)
      draft.members.content.splice(newIndex, 0, item)
    })
  }
  return {
    content,
    setContentItem,
    replaceContentItem,
    addContentItem,
    deleteContentItem,
    changePosition
  }
}

export default useContent