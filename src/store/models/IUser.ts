export interface IUser {
    name: string
    email: string
    profilePhotoSmall: string
    profilePhotoLarge: string
    info: IInfo
    albums: Array<album>
    subscribers: string[]
    subscriptions: string[]
    records: string[]
    friends: string[]
    userId: string
    isAddingPhoto: boolean
}
type album = {
    id: string
    photos: IPhoto[]
    name: string
    description: string
}

interface IInfo {
    city?: string
    educationPlace?: string
    description?: string
}
interface IPhoto {
    urlPhoto: string
    comments: IComment[]
    data: string
}
interface IComment {
    text: string
    data: string
    userId: string
    likes: number
}