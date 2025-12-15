import React from 'react'

function Loading() {
    return (
        <div className="w-full flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-300 border-t-blue-500"></div>
        </div>
    )
}

export default Loading