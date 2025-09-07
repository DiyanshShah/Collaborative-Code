import React from 'react'
import { useParams } from 'react-router-dom'
import Editor from './Editor'

const Roompage = () => {
    const { roomId } = useParams<{roomId: string}>();
  return (
    <div className='w-full h-full bg-gray-900'>
        <Editor roomId = {roomId || 'default-room'}/>
    </div>
  )
}

export default Roompage