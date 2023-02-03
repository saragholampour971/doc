import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
    <div className="h-screen flex flex-col text-center justify-center items-center">
      <p className="text-7xl mb-4">Page Not Found</p>
      <button
        onClick={() => navigate('/')}
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-1 shadow"
      >
        Go to dashboard
      </button>
    </div>
  )
}

export default NotFoundPage
