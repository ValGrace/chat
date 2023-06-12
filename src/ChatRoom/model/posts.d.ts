import { RoomsItem} from './rooms'
export interface PostsItem {
    id: number,
    caption: string,
    postTitle: string,
    url: string,
    createdAt: Date
} 

export interface postsProps {
    post: PostsItem
}

export type APIDataType = {
    message: string,
    status: string,
    posts: PostsItem[],
    post?: PostsItem,
    rooms: RoomsItem[],
    room?: RoomsItem 

} 