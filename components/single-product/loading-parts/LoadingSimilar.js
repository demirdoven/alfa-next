import React from 'react'

const LoadingSimilar = () => {
  return (
    <div className="relative">
        <h4 className="text-sm font-bold">Tire Size</h4>
        <div className="relative">
            <select 
                className="w-full py-2 rounded-md focus:outline-0 border-2 text-sm mt-1"
                defaultValue={'loading'}
                value={'loading'}
            >
                <option key="loading" value="loading" disabled>
                Loading...
                </option>
            </select>
        </div>
    </div>
  )
}

export default LoadingSimilar