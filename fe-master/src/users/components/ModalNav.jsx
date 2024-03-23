import {Link} from 'react-router-dom'
import {X} from "lucide-react"

const data = [
    {
      nav : 'Beranda',
      link : '/beranda'
    },
    {
      nav : 'Beranda',
      link : '/beranda'
    },
    {
      nav : 'Beranda',
      link : '/beranda'
    },
    {
      nav : 'Beranda',
      link : '/beranda'
    }
]

export default function ModalNav() {
  return (
    <div className='bg-gray-800  bg-opacity-75 absolute top-0 left-0 w-full h-full'>
        <div className='flex flex-col bg-white rounded-lg absolute top-4 bottom-4  left-4 right-4'>
          <button className='p-2 bg-slate-400 bg-opacity-10 absolute rounded-full right-4  top-4 '>
            <X/>
          </button>
          <nav className='flex flex-col w-full mt-16 p-3 jus'>
           
          </nav>
        </div>
    </div>
  )
}
