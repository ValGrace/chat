import axios, { AxiosResponse} from 'axios'
import { APIDataType, PostsItem } from '../model/posts'
import { RoomsItem } from '../model/rooms'
const baseUrl: string = "http://localhost:5000"

export const getPosts = async (): Promise<AxiosResponse<APIDataType>> => {
  try {
      const posts : AxiosResponse<APIDataType> = await axios.get(
        baseUrl + "/api/v0/post"
      )
      return posts
  } catch (error) {
    throw new Error(error);
    
  }
}

export const getRooms = async (): Promise<AxiosResponse<APIDataType>> => {
    try {
        const rooms: AxiosResponse<APIDataType> = await axios.get(
            baseUrl + "/rooms"
        )
        return rooms
    }
    catch (error) {
        throw new Error(error)
    }
    
}

export const addPost = async (formData: PostsItem): Promise<AxiosResponse<APIDataType>> => {
    try {
        const post: Omit<PostsItem, "id"> = {
            caption: formData.caption,
            postTitle: formData.postTitle,
            url: formData.url,
            createdAt: formData.createdAt
    }
    const savePost: AxiosResponse<APIDataType> = await axios.post(
        baseUrl + "/api/v0/post",
        post
    ) 
   return savePost
}
   catch (error) {
    throw new Error(error)
   }
}

export const addRoom = async (formData: RoomsItem): Promise<AxiosResponse<APIDataType>> => {
    try {
        const room: Omit<RoomsItem, "roomId"> = {
            groupName: formData.groupName,
            groupDescription: formData.groupDescription,
            url: formData.url,
            createdAt: formData.createdAt
        }
        const saveRoom: AxiosResponse<APIDataType> = await axios.post(
            baseUrl + "/api/v0/room",
            room
        ) 
        return saveRoom
    } catch (error) {
        throw new Error(error)
    }
}