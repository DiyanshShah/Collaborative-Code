import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {

    const [roomId, setRoomId] = useState('');
    const navigate = useNavigate();

    const handleCreateRoom = () => {
        const newRoomId = Math.random().toString(36).substring(2, 7);
        navigate(`/room/${newRoomId}`);
    }
    
    const handleJoinRoom = () => {
        if(roomId) {
            navigate(`/room/${roomId}`)
        }
    }
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-2">Collaborative Coder</h1>
        <p className="text-gray-400 mb-8">
          Create a new room or enter an existing Room ID to join.
        </p>
      </div>
      
      <div className="flex items-center space-x-4">
        <button 
          onClick={handleCreateRoom} 
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Create New Room
        </button>

        <form onSubmit={handleJoinRoom} className="flex items-center">
          <input
            type="text"
            placeholder="Enter Room ID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            className="bg-gray-800 border border-gray-700 text-white rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button 
            type="submit"
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-r-lg transition duration-300"
          >
            Join
          </button>
        </form>
      </div>
    </div>
  );
}

export default Homepage