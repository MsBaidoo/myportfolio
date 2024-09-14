

const Contact = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-white min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <form className="bg-white  rounded-lg p-8 w-full max-w-lg">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-6">
          <textarea
            placeholder="Message"
            className="w-full p-3 h-32 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>
        <div className='pl-28'>
          <button
            type="submit"
            className="w-[150px] bg-blue-500 text-white py-3 rounded-full "
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact
