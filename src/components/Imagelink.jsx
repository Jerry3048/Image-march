import { useState } from 'react'




const Imagelink = ({ onSubmit }) => {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit(input) 
    }
    setInput('')
  }

  return (
    <div className='bg-fancy-pattern w-[90%] sm:max-w-md mx-auto h-[70px] flex items-center justify-center rounded-lg mt-10'>
      <form
        onSubmit={handleSubmit}
        className="flex items-center w-[80%] sm:max-w-md mx-auto">
        <input
          type="text"
          placeholder="Enter image URL"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-white flex-1 p-2 text-black border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="bg-purple-600 text-white md:px-4 px-2 py-2 rounded hover:bg-purple-400 transition"
        >
          Detect
        </button>
      </form>
    </div>
  )
}

export default Imagelink