import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { get } from 'http';
import { toast } from "sonner"

export type User = {
    username: string;
    jwt: string;
}

type UserState = {
    user: User | null
}

const getUserFromLocalStorage = (): User | null => {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
}

const initialState = {
    user: getUserFromLocalStorage()
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action: PayloadAction<User>) => {
            const user = action.payload
            state.user = user
            localStorage.setItem('user', JSON.stringify(user))

            if (user.username === 'demo user') {
                toast.success('Welcome Guest User')
                return
            }
            toast.success('Login successful')
        },
        logoutUser: (state) => {
            state.user = null
            localStorage.removeItem('user')
        }
    },
})

export const { loginUser, logoutUser } = userSlice.actions
export default userSlice.reducer