import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import { API_GETALL_STUDENT } from '../../apis/apis';
    export const getAllUser = createAsyncThunk("getAllUser",async()=>{
        try{
            const response = await axios.get(API_GETALL_STUDENT);
            return response.data;
        } catch(error) {
            console.error(error);
        }
    });
const studentSlice = createSlice({
    name:"student",
    initialState:{
        students:[],
        loading:false,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllUser.pending,(state,action)=>{

        })
        .addCase(getAllUser.fulfilled,(state,action)=>{
            state.loading = true,
            state.students = action.payload
        })
    }
})