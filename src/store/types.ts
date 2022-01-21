export interface Brand {
  logo: string;
  title: string;
}

export interface Header {
  title: string
}

export interface Member {
  readonly type: 'member'
}

export interface Carousel {
  readonly type: 'carousel';
  imgs: string[]
}

export interface AppConfig {
  brand: Brand; // 品牌
  members: { // 会员专区
    header: Header
    content: Array<Member | Carousel>;
    footer: {}
  },
  mall: {} // 商城
  shoppingCar: {} // 购物车
  notification: {} // 通知
}