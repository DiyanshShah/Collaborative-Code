import { useEffect } from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import { io, Socket } from 'socket.io-client';

import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../store/store';
import { setConnectionStatus } from '../store/Slices/connectionSlice';

function Layout() {
    const status = useSelector((state: RootState) => state.connection.status);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const socket: Socket = io('http://localhost:3001')

        socket.on('connect', () => {
            dispatch(setConnectionStatus('connected'));
        });

        socket.on('disconnect', () => {
            dispatch(setConnectionStatus('disconnected'));
        });


        return () => {
            socket.disconnect();
        }
    }, [dispatch]);

    return (
        <div className='App'>
            <header className="border-b-[#444] h-[60px]">
                <h1>
                    Collaborative Coder
                </h1>
                <p>
                    <strong>Status: </strong>{status}
                </p>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
