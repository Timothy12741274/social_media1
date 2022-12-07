import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../models/IUser";
import {IGroup} from "../models/IGroup";
import {v4} from 'uuid'

type StateType = {
    users: IUser[]
    groups: IGroup[]
}
const initialState: StateType = {
    users: [
        {
            name: 'Ivan Ivanov',
            profilePhotoSmall: "",
            profilePhotoLarge: "",
            userId: '1',
            info: {
                city: 'Philadelphia',
                educationPlace: 'Stanford university',
                description: "Hello, I'm Ivan",
            },
            albums: [
                {
                    name: 'a',
                    description: 'b',
                    id: '1',
                    photos: [
                        {
                            urlPhoto: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                            comments: [
                                {
                                    text: 'Nice photo',
                                    data: '20.10.20',
                                    userId: '1',
                                    likes: 1
                                }
                            ],
                            data: '20.20.20'
                        },
                        {
                            urlPhoto: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                            comments: [
                                {
                                    text: 'Nice photo',
                                    data: '20.10.20',
                                    userId: '1',
                                    likes: 1
                                }
                            ],
                            data: '20.20.20'
                        }


                    ]
                }
            ],
            subscribers:[
                '1', '2'
            ],
            subscriptions: [
                '1',
                '2'
            ],
            records: ['1', '2'],
            friends: ['1', '2'],
            email: 'aloalo293484@gmail.com',
            isAddingPhoto: false
        },
        {
            name: 'Lasha',
            profilePhotoSmall: "",
            profilePhotoLarge: "",
            userId: '2',
            info: {
                city: 'Philadelphia',
                educationPlace: 'Stanford university',
                description: "Hello, I'm Ivan",
            },
            albums: [
                {
                    name: 'a',
                    description: 'b',
                    id: '1',
                    photos: [
                        {
                            urlPhoto: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                            comments: [
                                {
                                    text: 'Nice photo',
                                    data: '20.10.20',
                                    userId: '1',
                                    likes: 1
                                }
                            ],
                            data: '20.20.20'
                        },
                        {
                            urlPhoto: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                            comments: [
                                {
                                    text: 'Nice photo',
                                    data: '20.10.20',
                                    userId: '1',
                                    likes: 1
                                }
                            ],
                            data: '20.20.20'
                        }


                    ]
                }
            ],
            subscribers:[
                '1', '2'
            ],
            subscriptions: [
                '1',
                '2'
            ],
            records: ['1', '2'],
            friends: ['1', '2'],
            email: 'aloalo293484@gmail.com',
            isAddingPhoto: false
        }
    ],
    groups: [],
}

type creationAlbumDataType = {
    name: string
    description: string
    userId: string
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addAlbum(state, action: PayloadAction<creationAlbumDataType>){
            const {name, description, userId} = action.payload


            const newAlbum = {
                id: v4(),
                photos: [],
                name,
                description
            }
            const user = state.users.find(u=> u.userId === userId)
            user.albums.push(newAlbum)
            return state

        }
    }
})

export default userSlice.reducer
