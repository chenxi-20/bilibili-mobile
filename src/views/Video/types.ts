// 🔔 ? 表示属性是可选的，可有可无
export interface IVideoInfo {
  author?: string
  authorIconSrc?: string
  commentCount?: number
  date?: string
  favCount?: string
  id?: string
  likeCount?: string
  playCount?: string
  poster?: string
  videoSrc?: string
  videoTitle?: string
}

// 视频数组成员接口
export interface IVideoItem {
  id: number
  imgSrc: string
  playCount: string
  videoSrc: string
  desc: string
  commentCount: string
}

// 评论数组成员接口
export interface IComment {
  id: string
  date: string
  content: string
  avatar: string
  username: string
}
