import {createSlice, type PayloadAction} from '@reduxjs/toolkit'


type ConnectedStatus = 'connected' | 'disconnected' | 'connecting';

interface connectionState {
    status: ConnectedStatus;
}

const initialState: connectionState = {
    status: 'disconnected',
}

const connectionSlice = createSlice({
    name: 'connection',
    initialState,
    reducers: {
        setConnectionStatus: (state, action: PayloadAction<ConnectedStatus>) => {
            state.status = action.payload
        }
    }
});

export const {setConnectionStatus} = connectionSlice.actions
export default connectionSlice.reducer