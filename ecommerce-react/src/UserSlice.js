import axios from 'axios';
import { createSlice } from "@reduxjs/toolkit";

const UserSlice=createSlice({
    name:"user",
    initialState:{
        value:'hello',
        role:'customer'
    },
    reducers:{
        register:async (state,action)=>{
            console.log("State in Register:",state)
            console.log("Action in Register:",action)
            const response=await axios.post("http://127.0.0.1:8000/ecommerce/RegisterApi/",action.payload)
            console.log("Response of Register",response)
            if (response.status===200){
                state.value="Registered"
                state.role=""
                return state
            }
            return response
        },
        login: async (state,action)=>{
            console.log("State in Login:",state)
            console.log("Action in Login:",action)
            const response=await axios.post("http://127.0.0.1:8000/ecommerce/LoginUser/",action.payload)
            console.log("Response of Login:",response)
            if (response.status===200){
                state.value="LoggedIn"
                state.role=response.data.role
                return state
            }
            return response
        }
    }
})
export const {register,login}=UserSlice.actions
export default UserSlice.reducer