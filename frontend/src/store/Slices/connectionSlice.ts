import {createSlice, type PayloadAction} from '@reduxjs/toolkit'


type ConnectedStatus = 'connected' | 'disconnected' | 'connecting';

interface connectionState {
    status: ConnectedStatus;
    message: string | null
}

const initialState: connectionState = {
    status: 'disconnected',
    message: null
    
}

const connectionSlice = createSlice({
    name: 'connection',
    initialState,
    reducers: {
        setConnectionStatus: (state, action: PayloadAction<ConnectedStatus>) => {
            state.status = action.payload
        },

        setServerMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload
        }
    }
});

export const {setConnectionStatus, setServerMessage} = connectionSlice.actions
export default connectionSlice.reducer