import { Link } from 'react-router-dom'
import SpipaCircle from '../components/SpipaCircle'

function Home () {
  return (
    <>
      <div className='text-white h-[calc(100vh-4rem)]'>
        <SpipaCircle className='w-full h-[calc(100vh-4rem)] absolute' centerRadius={200} />
        <div className='relative w-full h-full flex flex-col items-center justify-center text-center'>
          <h2 className='text-5xl font-bold'>
            Ryan Milner
          </h2>
          <h3 className='text-4xl font-italic'>
            Penetration tester and developer
          </h3>
          <div className='flex justify-center flex-wrap gap-8 mt-6'>
            <Link to='/projects' className='rounded-lg font-bold py-4 px-12 bg-blue-700 hover:bg-blue-800 transition-colors duration-150'>
              Projects
            </Link>
            <Link to='/contact' className='rounded-lg font-bold py-4 px-12 border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition-colors duration-150'>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
